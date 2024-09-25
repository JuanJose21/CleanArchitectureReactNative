import {ProductFront} from '../entities/ProductFront';
import {ProductRepository} from '../repositories/ProductRepository';

export class GetProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute(): Promise<ProductFront[]> {
    return await this.productRepository.getProducts();
  }
}
