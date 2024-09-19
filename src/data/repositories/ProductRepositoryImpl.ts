import {Product} from '../../domain/entities/Product';
import {ProductRepository} from '../../domain/repositories/ProductRepository';
import {ProductRemoteDataSource} from '../datasources/ProductRemoteDataSource';

export class ProductRepositoryImpl implements ProductRepository {
  constructor(private productRemoteDataSource: ProductRemoteDataSource) {}

  async getProducts(): Promise<Product[]> {
    return await this.productRemoteDataSource.fetchProducts();
  }
}
