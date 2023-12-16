import config from '@/config';
import { AppServiceProvider } from '@/providers/AppServiceProvider';
import { RouteServiceProvider } from '@/providers/RouteServiceProvider';
import {
  Application as App,
  ConsoleKernel,
  HttpKernel,
  Logger,
  ServiceProvider,
} from '@toctive/axiom';

export class Application extends App {
  /**
   * Declaring the main Logger. This allows the Application to have a logger
   * object that can be used for logging purposes.
   */
  logger: Logger = new Logger();

  /**
   * all providers that will be registered and booted when the application boots
   *
   * @var ServiceProvider[]
   *
   */
  providers: ServiceProvider[] = [
    new AppServiceProvider(this),
    new RouteServiceProvider(this),
  ];

  /**
   * Register project configuration.
   *
   * @returns {Object} { }
   *
   */
  protected loadConfig(): Object {
    return config;
  }

  /**
   * Registers the kernels that will be used to boot the application as
   * singletons in the service container.
   *
   * @returns {void}
   *
   */
  protected registerSingletons(): void {
    this.set('HttpKernel', () => new HttpKernel(this));
    this.set('ConsoleKernel', () => new ConsoleKernel(this));
  }
}

export default Application;
