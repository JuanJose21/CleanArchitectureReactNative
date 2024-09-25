import React from 'react';
import { Image, Text, View } from 'react-native';
import { ProductFront } from '../../domain/entities/ProductFront';

interface IProps {
  product: ProductFront;
}

export const ProductCard = ({ product }: IProps) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: product.image }} />
      <Text>{product.name}</Text>
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
