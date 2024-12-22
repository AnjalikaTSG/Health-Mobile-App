import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import LottieView from 'lottie-react-native';
import ItemCard from './ItemCard';
import FloatingButton from './FloatingButton';

const HomeScreen = ({ route }) => {
  const { username } = route.params;
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimationFinished(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // You can now manually require images for each item if needed
    const hospitalImages = {
      'Hospital 1': require('../Img/Hospital/Hospital1.jpg'),
      'Hospital 2': require('../Img/Hospital/Hospital2.jpg'),
      'Hospital 3': require('../Img/Hospital/Hospital3.jpeg'),
      'Hospital 4': require('../Img/Hospital/Hospital4.jpg'),
      'Hospital 5': require('../Img/Hospital/Hospital5.jpg'),
      'Hospital 6': require('../Img/Hospital/Hospital6.jpeg'),
    };

    fetch('https://www.communitybenefitinsight.org/api/get_hospitals.php?state=NC')
      .then((response) => response.json())
      .then((data) => {
        const formattedItems = data.map((item, index) => ({
          id: index,
          ...item,
          imageUrl: hospitalImages[`Hospital ${index + 1}`], // Use local images based on index
          status: 'Available',
        }));
        setItems(formattedItems);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const toggleSelectItem = (itemId) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(itemId)
        ? prevSelected.filter((id) => id !== itemId)
        : [...prevSelected, itemId]
    );
  };

  return (
    <View style={styles.container}>
      {!isAnimationFinished ? (
        <View style={styles.loadingContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={require('../Img/logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.welcomeText2}>Family Care Channeling Center</Text>
          </View>
          <LottieView
            source={require('../Animation/Animation - heart.json')}
            autoPlay
            loop={false}
            style={{ width: 350, height: 350 }}
          />
          <Text style={styles.loadingText}>Loading your experience...</Text>
        </View>
      ) : (
        <>
          <View style={styles.welcomeContainer}>
            <Image
              source={require('../Img/logo.png')}
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
                  isSelected={selectedItems.includes(item.id)}
                  onToggleSelect={() => toggleSelectItem(item.id)}
                />
              ))
            )}
          </ScrollView>
          {selectedItems.length > 0 && (
            <FloatingButton
              count={selectedItems.length}
              onPress={() => {
                console.log('Selected Items:', selectedItems);
              }}
            />
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E7DDEB',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 18,
    color: '#8e44ad',
    fontWeight: 'bold',
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
    marginBottom: 10,
  },
});

export default HomeScreen;
