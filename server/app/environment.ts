import { EnvironmentsEnum } from './providers/enum/environment.enum';

class Environment {
  private environment: string;

  constructor(environment: string) {
    this.environment = environment;
  }

  getPort(): number {
    if (this.environment === EnvironmentsEnum.dev_environment) {
      return 3001;
    } 
    
    if (this.environment === EnvironmentsEnum.prod_environment) {
      return 3002;
    }

    return 3000;
  }

  getDBName(): string {
    if (this.environment === EnvironmentsEnum.dev_environment) {
      return 'ecommerce-db_dev';
    } 
    
    if (this.environment === EnvironmentsEnum.prod_environment) {
      return 'ecommerce-db_prod';
    }

    return 'ecommerce-db_local';
  }
}

export default new Environment(EnvironmentsEnum.local_environment);