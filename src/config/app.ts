import { existsSync } from 'node:fs';
import { join, resolve } from 'node:path';

export default {
  appName: 'Axiom Project',

  /**
   * Maintenance Mode
   * -----------------------------------------------
   * The configuration setting that determines whether the application is in
   * maintenance mode or not.
   *
   */
  maintenanceMode: {
    /**
     * Indicates whether the application is in maintenance mode or not by
     * checking if a file named "down" exists in the current working directory.
     *
     * The current working directory is where you run the application.
     *
     * @var boolean
     *
     */
    enabled: existsSync(resolve(join('./down'))),

    /**
     * All routes that will remain working even in maintenance mode.
     *
     * @example ```["/api/v3/*", "/"]```
     *
     * @var string[]
     *
     */
    except: [],

    /**
     * Redirect all incoming requests to absolute or relative URL.
     *
     * @description This is done by sending the Location HTTP response header
     * that tells the client to redirect to another URL.
     *
     * This will override the status code in this configuration to `302 Found`
     * not `503 Service Unavailable` which means temporarily redirecting to
     * another URL.
     *
     * @see
     * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Location | MDN HTTP Header Location}
     * @see
     * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302 | MDN HTTP Status 302}
     *
     * @var {string | null}
     *
     */
    redirect: null,

    /**
     * Refresh header that will tell the browser to refresh the page every X
     * seconds.
     *
     * @description This HTTP header is not standard but it's commonly used on
     * the web and supported in every web browser.
     *
     * This header also accepts a URL value to redirect to after X seconds:
     * `Refresh: 5; url=https://example.com/`.
     *
     * @see
     * {@link https://stackoverflow.com/questions/283752/refresh-http-header | Stack Overflow - Refresh http header}
     * @see
     * {@link https://en.wikipedia.org/wiki/Meta_refresh | wikipedia - Meta Refresh}
     *
     * @example `60`, or `60; url=https://example.com/`
     *
     * @var {number | string | null}
     *
     */
    refresh: null,

    /**
     * Retry-After header that will be sent to the client.
     *
     * @description Retry-After is a response HTTP header that tells the client
     * how long he should wait before making a follow-up request.
     *
     * @see
     * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After | MDN HTTP Headers RETry-After}
     *
     * @var {number | string | null}
     *
     */
    retry: null,

    /**
     * This a secret key that should be sent within a cookie to access the
     * application even in maintenance mode. That helps the developers to
     * continue develop and test the application without the need to turn the
     * maintenance mode off.
     *
     * @var {string | null}
     *
     */
    secret: null,

    /**
     * HTTP response status code that will be sent within all HTTP responses
     * during maintenance mode is on.
     *
     * The default value is `503 Service Unavailable`.
     *
     * @default 503
     *
     * @see
     * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503 | MDN HTTP Status 503}
     *
     * @var number
     *
     */
    status: 503,

    /**
     * A string that represents the body of the response that will be sent to the
     * client. This can be just a string or an HTML code that will be rendered in
     * the browser.
     *
     * @default ```<h1>Website is under maintenance</h1>```
     *
     * @var {string | null}
     *
     */
    template:
      'The application is currently undergoing maintenance. Please try again later.',
  },
};
