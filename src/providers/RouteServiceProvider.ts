import { RouteServiceProvider as ServiceProvider } from '@toctive/axiom';

export class RouteServiceProvider extends ServiceProvider {
  public async register(): Promise<void> {
    // ...
  }

  public async boot(): Promise<void> {
    await require('../routes/api.ts');
    // ...
  }
}
