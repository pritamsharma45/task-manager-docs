import { d as createAstro, e as createComponent, r as renderTemplate, l as renderComponent } from '../astro.760ec1ef.mjs';
import { p as paths, $ as $$Page } from './404.astro.54dfa868.mjs';
import 'html-escaper';
/* empty css                         */import 'node:path';
/* empty css                                                              */import 'node:url';
import 'execa';

const $$Astro = createAstro();
async function getStaticPaths() {
  return paths;
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { Content, headings } = await Astro2.props.entry.render();
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { ...Astro2.props, "headings": headings }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Content", Content, {})}` })}`;
}, "C:/Users/nitis/Desktop/Dev Projects/terrestrial-trappist/node_modules/@astrojs/starlight/index.astro", void 0);

const $$file = "C:/Users/nitis/Desktop/Dev Projects/terrestrial-trappist/node_modules/@astrojs/starlight/index.astro";
const $$url = undefined;

export { $$Index as default, $$file as file, getStaticPaths, $$url as url };
