import apiRouter from '@/routes/api';
import { RouteServiceProvider as ServiceProvider } from '@toctive/axiom';

export class RouteServiceProvider extends ServiceProvider {
  public async register(): Promise<void> {
    // ...
  }

  public async boot(): Promise<void> {
    this.registerRoutes(apiRouter);

    // Make sure to call the next function after registering all router
    this.handlerNotFoundError();
  }
}
