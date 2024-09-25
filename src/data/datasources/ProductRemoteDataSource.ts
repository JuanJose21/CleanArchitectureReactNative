import axios from 'axios';
import {Product} from '../../domain/entities/Product';
import {ProductAdapter} from '../../domain/adapters/ProductAdapter';
import {ProductFront} from '../../domain/entities/ProductFront';

export class ProductRemoteDataSource {
  private productAdapter: ProductAdapter;

  constructor(productAdapter: ProductAdapter) {
    this.productAdapter = productAdapter;
  }

  async fetchProducts(): Promise<ProductFront[]> {
    const response = await axios.get<Product[]>(
      'https://fakestoreapi.com/products',
    );
    return response.data.map((product: Product) =>
      this.productAdapter.adapt(product),
    );
  }
}
