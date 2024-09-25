import {ProductAdapter} from '../../domain/adapters/ProductAdapter';
import {Product} from '../../domain/entities/Product';
import {ProductFront} from '../../domain/entities/ProductFront';

export class ProductAdapterImpl implements ProductAdapter {
  adapt(data: Product): ProductFront {
    return {
      id: data.id,
      name: data.title,
      price: data.price,
      description: data.description,
      category: data.category,
      image: data.image,
      rating: {
        rate: data.rating.rate,
        count: data.rating.count,
      },
    };
  }
}
