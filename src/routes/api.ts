// import HomeController from '@/App/Controllers/HomeController';
import { RouteActionParameters, Router } from '@toctive/axiom';

Router.get('/', () => 'Welcome to Axiom');
Router.get('/random', () => Math.random().toString(36).substring(7));
Router.get('/echo', ({ request }: RouteActionParameters) => request.toJson());
Router.get('/echo-as-json', ({ request }: RouteActionParameters) =>
  JSON.parse(request.toJson()),
);
