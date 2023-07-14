// import HomeController from '@/App/Controllers/HomeController';
import { Router } from '@toctive/axiom';

Router.get('/about', () => Math.random().toString(36).substring(7));
