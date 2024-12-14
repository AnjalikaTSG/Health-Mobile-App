import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the FontAwesome icons

const ItemCard = ({ item, isSelected, onToggleSelect }) => {
  return (
    <TouchableOpacity
      style={[styles.card, isSelected ? styles.selectedCard : null]} 
      onPress={() => onToggleSelect(item.id)} // Toggle selection on press
    >
      <Image
        source={{ uri: item.imageUrl }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.name || 'Unknown Hospital'}</Text>
        <Text style={styles.status}>{isSelected ? 'Selected' : 'Available'}</Text>
        <Text style={styles.description}>
          {item.city ? `City: ${item.city}` : 'No city available'}
        </Text>
      </View>

      {/* Tick icon inside a small box, only visible if the card is selected */}
      {isSelected && (
        <View style={styles.tickContainer}>
          <Icon name="check" size={20} color="#fff" />
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 15,
    elevation: 3, // Add shadow for Android
    shadowColor: '#000', // Add shadow for iOS
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    marginRight: '2%', // Ensure there’s spacing between cards when wrapping
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: '#8e44ad',
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  cardContent: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#2c3e50',
  },
  status: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8e44ad',
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
    color: '#7f8c8d',
  },
  tickContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#8e44ad', // Box color
    width: 30,
    height: 30,
    borderRadius: 15, // Circle shape
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Optional: Add shadow for a 3D effect
  },
});

export default ItemCard;
