import React from 'react';
import { Product } from '../../domain/entities/Product';
import { Image, Text, View } from 'react-native';

interface IProps {
  product: Product;
}

export const ProductCard = ({ product }: IProps) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: product.image }} />
      <Text>{product.title}</Text>
    </View>
  );
};

const styles = {
  card: {
    padding: 16,
    margin: 8,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: 100,
    height: 100,
  },
};
