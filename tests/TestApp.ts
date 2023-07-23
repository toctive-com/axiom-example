import { runApp } from '@/core';
import { HttpKernel } from '@toctive/axiom';

/**
 * Runs an application, captures a request using the HttpKernel, and returns the
 * application.
 *
 * @returns Returning the app object after running the HTTP Kernel.
 *
 */
export async function TestApp() {
  const app = await runApp();
  app.make<HttpKernel>('HttpKernel').captureRequest();
  return app;
}

export default TestApp;
