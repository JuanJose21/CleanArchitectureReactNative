import axios from 'axios';
import {Product} from '../../domain/entities/Product';

export class ProductRemoteDataSource {
  async fetchProducts(): Promise<Product[]> {
    const response = await axios.get<Product[]>(
      'https://fakestoreapi.com/products',
    );
    return response.data;
  }
}
