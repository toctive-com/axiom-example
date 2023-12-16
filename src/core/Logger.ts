import loggerConfig from '@/config/logger';
import { Logger as LoggerClass } from '@toctive/axiom';
import { app } from './index';

export class Logger extends LoggerClass {
  constructor() {
    super({
      config: loggerConfig,
    });
  }

  static emergency = (message: string, ...args: any[]) => {
    return app.logger.emergency(message, ...args);
  };
  static alert = (message: string, ...args: any[]) => {
    return app.logger.alert(message, ...args);
  };
  static critical = (message: string, ...args: any[]) => {
    return app.logger.critical(message, ...args);
  };
  static error = (message: string, ...args: any[]) => {
    return app.logger.error(message, ...args);
  };
  static warning = (message: string, ...args: any[]) => {
    return app.logger.warning(message, ...args);
  };
  static notice = (message: string, ...args: any[]) => {
    return app.logger.notice(message, ...args);
  };
  static info = (message: string, ...args: any[]) => {
    return app.logger.info(message, ...args);
  };
  static debug = (message: string, ...args: any[]) => {
    return app.logger.debug(message, ...args);
  };
}

export default Logger;
