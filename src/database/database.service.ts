import { Injectable } from '@nestjs/common';
import { ProductConfigRepository } from './repositories/product-config.repository';
import { ProductRiderRepository } from './repositories/product-rider.repository';

export type RepoRegistry = {
  productConfig: ProductConfigRepository;
  productRider: ProductRiderRepository;
};

@Injectable()
export class DatabaseService {
  constructor(
    private productConfigRepository: ProductConfigRepository,
    private productRiderRepository: ProductRiderRepository,
  ) {}

  repositories(): RepoRegistry {
    return {
      productConfig: this.productConfigRepository,
      productRider: this.productRiderRepository,
    };
  }
}
