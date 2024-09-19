import {Product} from '../entities/Product';
import {ProductRepository} from '../repositories/ProductRepository';

export class GetProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute(): Promise<Product[]> {
    return await this.productRepository.getProducts();
  }
}
