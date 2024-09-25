import React from 'react';
import { FlatList, Text } from 'react-native';
import { useProductViewModel } from '../viewmodels/ProductViewModel';
import { GetProductUseCase } from '../../domain/usecases/GetProductUseCase';
import { ProductRepositoryImpl } from '../../data/repositories/ProductRepositoryImpl';
import { ProductRemoteDataSource } from '../../data/datasources/ProductRemoteDataSource';
import { ProductCard } from './ProductCard';
import { ProductAdapterImpl } from '../../data/adapters/ProductAdapterImpl';

const ProductListScreen = () => {
  const productAdapter = new ProductAdapterImpl();
  const dataSource = new ProductRemoteDataSource(productAdapter);
  const repository = new ProductRepositoryImpl(dataSource);
  const useCaseGetProduct = new GetProductUseCase(repository);

  const { products, loading } = useProductViewModel(useCaseGetProduct);

  if (loading) {
    return <Text>Cargando...</Text>;
  }

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductCard product={item} />}
    />
  );
};

export default ProductListScreen;
