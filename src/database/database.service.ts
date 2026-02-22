import { Injectable } from '@nestjs/common';

/**
 * Add ProductConfigRepository
 */

export type RepoRegistry = {
  // productConfig: ProductConfigRepository;
};

@Injectable()
export class DatabaseService {
  constructor() {}

  repositories(): RepoRegistry {
    return {};
  }
}
