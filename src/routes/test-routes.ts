import { RouteActionParameters, Router } from '@toctive/axiom';

const router = new Router();

router.get('/', [
  ({ res, next }) => {
    res.write('Welcome to ');
    return next();
  },
  ({ res, next }) => {
    res.write('Axiom');
    return next();
  },
]);
router.get('/welcome', () => 'Welcome to Axiom');
router.get('/health-check', () => ({
  status: 'OK',
  message: 'Axiom is running',
  timestamp: new Date().toISOString(),
}));
router.get('/random', () => Math.random().toString(36).substring(3));
router.get('/echo', ({ request }: RouteActionParameters) => request.toJson());
router.get('/echo-as-json', ({ request }: RouteActionParameters) =>
  JSON.parse(request.toJson()),
);
router.get('/test', ({ res, next }) => {
  res.write('again');
  return next();
});
router.group(function (router) {
  router.get('/test2', () => 'again2');
});

export default router;
