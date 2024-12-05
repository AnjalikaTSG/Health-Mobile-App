import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useClickCount } from './ClickCountProvider'; // Access context

const ItemCard = ({ item }) => {
  const { incrementCount } = useClickCount(); // Access increment function

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={incrementCount}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <Text>{item.title}</Text>
        <Text>{item.body}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
});

export default ItemCard;
