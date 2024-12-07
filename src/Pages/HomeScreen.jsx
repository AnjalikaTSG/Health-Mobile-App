import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import ItemCard from './ItemCard'; // Make sure this component displays item details
import FloatingButton from './FloatingButton';

const HomeScreen = ({ route }) => {
  const { username } = route.params; // Receive username from navigation
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch items from the API
    fetch('https://www.communitybenefitinsight.org/api/get_hospitals.php?state=NC')
      .then(response => response.json())
      .then(data => {
        // Format the data to include placeholder images and static status
        const formattedItems = data.map(item => ({
          ...item,
          imageUrl: 'https://via.placeholder.com/150', // Placeholder image
          status: 'Available', // Static status
        }));
        setItems(formattedItems);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      {/* Display username at the top */}
      <Text style={styles.welcomeText}>Welcome, {username}!</Text>
      <Text style={styles.header}>Item List</Text>
      <ScrollView contentContainerStyle={styles.cardContainer}>
        {items.length === 0 ? (
          <Text>No items available.</Text> // Show a message when there are no items
        ) : (
          items.map(item => (
            <ItemCard key={item.id} item={item} />
          ))
        )}
      </ScrollView>
      <FloatingButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E7DDEB',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10,
    color: '#8e44ad',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default HomeScreen;
