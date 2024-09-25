import {useEffect, useState} from 'react';
import {GetProductUseCase} from '../../domain/usecases/GetProductUseCase';
import {ProductFront} from '../../domain/entities/ProductFront';

export const useProductViewModel = (getProductUseCase: GetProductUseCase) => {
  const [products, setProducts] = useState<ProductFront[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadProducts = async () => {
      const result = await getProductUseCase.execute();
      setProducts(result);
      setLoading(false);
    };

    loadProducts();
  }, [getProductUseCase]);

  return {
    products,
    loading,
  };
};
