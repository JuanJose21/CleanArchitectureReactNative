import {Product} from '../entities/Product';
import {ProductFront} from '../entities/ProductFront';

export interface ProductAdapter {
  adapt(data: Product): ProductFront;
}
