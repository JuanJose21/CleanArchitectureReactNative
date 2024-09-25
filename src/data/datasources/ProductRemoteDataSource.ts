import {Product} from '../../domain/entities/Product';
import {ProductAdapter} from '../../domain/adapters/ProductAdapter';
import {ProductFront} from '../../domain/entities/ProductFront';
import api from '../../infraestructure/network/apis';

export class ProductRemoteDataSource {
  private productAdapter: ProductAdapter;

  constructor(productAdapter: ProductAdapter) {
    this.productAdapter = productAdapter;
  }

  async fetchProducts(): Promise<ProductFront[]> {
    const response = await api.get('/products');
    return response.data.map((product: Product) =>
      this.productAdapter.adapt(product),
    );
  }
}
