import { d as createAstro, e as createComponent, r as renderTemplate, m as maybeRenderHead } from './astro.760ec1ef.mjs';
/* empty css                                                                   */
const $$Astro = createAstro();
const $$Utterances = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Utterances;
  return renderTemplate`${maybeRenderHead()}<div id="utterances-container" class="utterance-container astro-UX6UFALN"></div>`;
}, "C:/Users/nitis/Desktop/Dev Projects/terrestrial-trappist/src/components/Utterances.astro", void 0);

export { $$Utterances as $ };
