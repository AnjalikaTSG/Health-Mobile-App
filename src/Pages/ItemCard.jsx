import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useClickCount } from './ClickCountProvider'; // Access context

const ItemCard = ({ item }) => {
  const { incrementCount } = useClickCount(); // Access increment function

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={incrementCount} style={styles.content}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.text}>{item.name}</Text>
        </View>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Street Address:</Text>
          <Text style={styles.text}>{item.street_address}</Text>
        </View>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>City:</Text>
          <Text style={styles.text}>{item.city}</Text>
        </View>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>State:</Text>
          <Text style={styles.text}>{item.state}</Text>
        </View>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Zip Code:</Text>
          <Text style={styles.text}>{item.zip_code}</Text>
        </View>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Hospital Bed Count:</Text>
          <Text style={styles.text}>{item.hospital_bed_count}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%', // Full width to ensure one item per column
    padding: 15,
    borderWidth: 1.5,
    borderRadius: 15,
    borderColor: '#8e44ad',
    backgroundColor: '#E7DDEB',
    marginBottom: 20,
  },
  content: {
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  labelContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 5,
  },
  text: {
    fontSize: 16,
  },
});

export default ItemCard;
