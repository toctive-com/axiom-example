export default {
  /**
   * The hostname or IP address where the application will be hosted.
   *
   * @type {string}
   * 
   */
  host: 'localhost',

  /**
   * This indicates that the application will listen for incoming requests on 
   * a specific port.
   *
   * @type {number}
   * 
   */
  port: 3000,

  /**
   * This property is likely used to indicate whether the port
   * number should be incremented automatically when the application is started.
   * for example, if the port is 8080, then the next port number would be 8081.
   *
   * @type {boolean}
   *
   */
  incrementalPort: true,
};
