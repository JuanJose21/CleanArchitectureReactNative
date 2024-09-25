import {ProductFront} from '../entities/ProductFront';

export interface ProductRepository {
  getProducts(): Promise<ProductFront[]>;
}
