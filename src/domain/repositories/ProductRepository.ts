import {Product} from '../entities/Product';

export interface ProductRepository {
  getProducts(): Promise<Product[]>;
}
