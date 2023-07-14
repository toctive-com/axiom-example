import { runApp } from '@/core';
import { HttpKernel, clustering } from '@toctive/axiom';

/**
 * Run The Application
 * --------------------------------------------------------------------------
 * Once we have the application, we can handle the incoming request using
 * the application's HTTP kernel. Then, we will send the response back
 * to this client's browser, allowing them to enjoy our application.
 *
 */
async function main() {
  // Load all developer files (e.g. routes, middleware, class ...)
  const app = await runApp();

  // Load framework kernel which includes HTTP server and will handle requests
  const kernel = app.make<HttpKernel>('HttpKernel');

  // Handle the request using the response object and send response to client
  await kernel.captureRequest();
}

/**
 * Run The Server In Clusters
 * --------------------------------------------------------------------------
 * Create multiple processes to handle incoming requests. This is useful for testing
 * and debugging. The main process will be opened for every unless killed manually.
 *
 */
clustering(main, {processes: 1});
