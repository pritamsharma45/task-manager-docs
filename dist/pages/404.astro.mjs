export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import '../chunks/astro.760ec1ef.mjs';
import 'html-escaper';

const page = () => import('../chunks/pages/404.astro.54dfa868.mjs').then(n => n._);

export { page };
