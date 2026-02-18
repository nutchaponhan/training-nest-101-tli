import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DatabaseService } from './database/database.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly databaseService: DatabaseService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('product-configs')
  async getProductConfigs() {
    const repos = this.databaseService.repositories();

    try {
      const data = await repos.productConfig.findAll();
      return data;
    } catch (error) {
      return {
        error: error?.message,
      };
    }
  }
}
