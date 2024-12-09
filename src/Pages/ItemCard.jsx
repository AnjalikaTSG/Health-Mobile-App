import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import FloatingButton from './FloatingButton';
import ItemCard from './ItemCard';

const HomeScreen = ({ route }) => {
  const { username } = route.params; // Receive username from navigation
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]); // Track selected items

  useEffect(() => {
    // Fetch items from the API
    fetch('https://www.communitybenefitinsight.org/api/get_hospitals.php?state=NC')
      .then((response) => response.json())
      .then((data) => {
        // Format the data to include placeholder images and static status
        const formattedItems = data.map((item) => ({
          ...item,
          imageUrl: 'https://via.placeholder.com/150', // Placeholder image
        }));
        setItems(formattedItems);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Toggle item selection
  const toggleSelectItem = (itemId) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(itemId)
        ? prevSelected.filter((id) => id !== itemId) // Remove if already selected
        : [...prevSelected, itemId] // Add if not selected
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Image
          source={require('../Img/logo.png')} // Replace with your logo path
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.welcomeText2}>Family Care Channeling Center</Text>
      </View>
      <View style={styles.welcomeRow}>
        <Text style={styles.welcomeText}>Welcome,</Text>
        <Text style={styles.usernameText}>{username}!</Text>
      </View>
      <Text style={styles.header}>Item List</Text>
      <ScrollView contentContainerStyle={styles.cardContainer}>
        {items.length === 0 ? (
          <Text>No items available.</Text>
        ) : (
          items.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              isSelected={selectedItems.includes(item.id)} // Pass selection state
              onToggleSelect={toggleSelectItem} // Pass toggle function
            />
          ))
        )}
      </ScrollView>
      <FloatingButton count={selectedItems.length} /> {/* Pass selected count */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E7DDEB',
  },
  welcomeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 50,
    height: 60,
    marginRight: 5,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginRight: 5,
  },
  usernameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8e44ad',
  },
  welcomeText2: {
    fontSize: 18,
    fontWeight: 'bold',
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
  welcomeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
});

export default HomeScreen;
