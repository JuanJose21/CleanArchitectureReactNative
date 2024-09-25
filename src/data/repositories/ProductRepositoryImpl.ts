import {ProductFront} from '../../domain/entities/ProductFront';
import {ProductRepository} from '../../domain/repositories/ProductRepository';
import {ProductRemoteDataSource} from '../datasources/ProductRemoteDataSource';

export class ProductRepositoryImpl implements ProductRepository {
  constructor(private productRemoteDataSource: ProductRemoteDataSource) {}

  async getProducts(): Promise<ProductFront[]> {
    return await this.productRemoteDataSource.fetchProducts();
  }
}
