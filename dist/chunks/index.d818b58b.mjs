import { d as createAstro, e as createComponent, r as renderTemplate, m as maybeRenderHead, l as renderComponent, u as unescapeHTML, i as renderSlot, f as addAttribute, F as Fragment, s as spreadAttributes, _ as __astro_tag_component__, h as createVNode } from './astro.760ec1ef.mjs';
import { b as $$Icon } from './pages/404.astro.54dfa868.mjs';
/* empty css                                                             *//* empty css                                                                 */import { select } from 'hast-util-select';
import { rehype } from 'rehype';
import { visit, CONTINUE, SKIP } from 'unist-util-visit';
/* empty css                                                             *//* empty css                                                                 */import './Utterances.258ac861.mjs';
import 'html-escaper';
/* empty css                        */import 'node:path';
/* empty css                                                             */import 'node:url';
import 'execa';
/* empty css                                                                   */
const $$Astro$7 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Card;
  const { icon, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="card flex astro-V5TIDMUC">
	<p class="title flex astro-V5TIDMUC">
		${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "icon astro-V5TIDMUC", "size": "1.333em" })}`}
		<span class="astro-V5TIDMUC">${unescapeHTML(title)}</span>
	</p>
	<div class="body astro-V5TIDMUC">${renderSlot($$result, $$slots["default"])}</div>
</article>`;
}, "C:/Users/nitis/Desktop/Dev Projects/terrestrial-trappist/node_modules/@astrojs/starlight/user-components/Card.astro", void 0);

const $$Astro$6 = createAstro();
const $$CardGrid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$CardGrid;
  const { stagger = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([["card-grid", { stagger }], "astro-ZNTQMYDN"], "class:list")}>${renderSlot($$result, $$slots["default"])}</div>`;
}, "C:/Users/nitis/Desktop/Dev Projects/terrestrial-trappist/node_modules/@astrojs/starlight/user-components/CardGrid.astro", void 0);

const TabItemTagname = "starlight-tab-item";
const focusableElementSelectors = [
  "input:not([disabled]):not([type=hidden])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  "[contenteditable]",
  "[tabindex]:not([disabled])"
].map((selector) => `${selector}:not([hidden]):not([tabindex="-1"])`).join(",");
let count = 0;
const getIDs = () => {
  const id = count++;
  return { panelId: "tab-panel-" + id, tabId: "tab-" + id };
};
const tabsProcessor = rehype().data("settings", { fragment: true }).use(function tabs() {
  return (tree, file) => {
    file.data.panels = [];
    let isFirst = true;
    visit(tree, "element", (node) => {
      if (node.tagName !== TabItemTagname || !node.properties) {
        return CONTINUE;
      }
      const { dataLabel } = node.properties;
      const ids = getIDs();
      file.data.panels?.push({
        ...ids,
        label: String(dataLabel)
      });
      delete node.properties.dataLabel;
      node.tagName = "section";
      node.properties.id = ids.panelId;
      node.properties["aria-labelledby"] = ids.tabId;
      node.properties.role = "tabpanel";
      const focusableChild = select(focusableElementSelectors, node);
      if (!focusableChild) {
        node.properties.tabindex = 0;
      }
      if (isFirst) {
        isFirst = false;
      } else {
        node.properties.hidden = true;
      }
      return SKIP;
    });
  };
});
const processPanels = (html) => {
  const file = tabsProcessor.processSync({ value: html });
  return {
    /** Data for each tab panel. */
    panels: file.data.panels,
    /** Processed HTML for the tab panels. */
    html: file.toString()
  };
};

const $$Astro$5 = createAstro();
const $$Tabs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Tabs;
  const panelHtml = await Astro2.slots.render("default");
  const { html, panels } = processPanels(panelHtml);
  return renderTemplate`${renderComponent($$result, "starlight-tabs", "starlight-tabs", { "class": "astro-ESQGOLMP" }, { "default": () => renderTemplate`
	${panels && renderTemplate`${maybeRenderHead()}<div class="tablist-wrapper not-content astro-ESQGOLMP">
				<ul role="tablist" class="astro-ESQGOLMP">
					${panels.map(({ label, panelId, tabId }, idx) => renderTemplate`<li role="presentation" class="tab astro-ESQGOLMP">
							<a role="tab"${addAttribute("#" + panelId, "href")}${addAttribute(tabId, "id")}${addAttribute(idx === 0 && "true", "aria-selected")}${addAttribute(idx !== 0 ? -1 : 0, "tabindex")} class="astro-ESQGOLMP">
								${label}
							</a>
						</li>`)}
				</ul>
			</div>`}
	${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(html)}` })}
` })}`;
}, "C:/Users/nitis/Desktop/Dev Projects/terrestrial-trappist/node_modules/@astrojs/starlight/user-components/Tabs.astro", void 0);

const $$Astro$4 = createAstro();
const $$TabItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TabItem;
  const { label } = Astro2.props;
  if (!label) {
    throw new Error("Missing prop `label` on `<TabItem>` component.");
  }
  return renderTemplate`${renderComponent($$result, "TabItemTagname", TabItemTagname, { "data-label": label }, { "default": ($$result2) => renderTemplate`
	${renderSlot($$result2, $$slots["default"])}
` })}`;
}, "C:/Users/nitis/Desktop/Dev Projects/terrestrial-trappist/node_modules/@astrojs/starlight/user-components/TabItem.astro", void 0);

const $$Astro$3 = createAstro();
const $$LinkCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LinkCard;
  const { title, description, ...attributes } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="astro-MF7FZ2MJ">
	<span class="flex stack astro-MF7FZ2MJ">
		<a${spreadAttributes(attributes, "attributes", { "class": "astro-MF7FZ2MJ" })}>
			<span class="title astro-MF7FZ2MJ">${unescapeHTML(title)}</span>
		</a>
		${description && renderTemplate`<span class="description astro-MF7FZ2MJ">${unescapeHTML(description)}</span>`}
	</span>
	${renderComponent($$result, "Icon", $$Icon, { "name": "right-arrow", "size": "1.333em", "class": "icon rtl:flip astro-MF7FZ2MJ" })}
</div>`;
}, "C:/Users/nitis/Desktop/Dev Projects/terrestrial-trappist/node_modules/@astrojs/starlight/user-components/LinkCard.astro", void 0);

const $$Astro$2 = createAstro();
const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ContactForm;
  return renderTemplate`${maybeRenderHead()}<div class="not-content">
    
      
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width">
      
      
        <form class=" pl-4 py-4 pr-2 rounded-lg border-blue-200 border-2 hover:border-blue-300 duration-500" name="contact" netlify>
           <div class="flex flex-row w-full gap-2">
            <p>
                <label>Name <input class="w-full py-1 px-2 rounded-lg border-solid border-2 hover:border-blue-500 duration-500" type="text" name="name"></label>
              </p>
              <p>
                <label>Email <input class="w-full py-1 px-2 rounded-lg border-solid border-2 hover:border-blue-500 duration-500" type="email" name="email"></label>
              </p>
           </div>
          
         <div class="flex flex-row w-full">
           
            <textarea placeholder="message..." class="py-1 px-2 mr-2 my-4  w-full  rounded-lg border-solid border-2 hover:border-blue-500 duration-500" name="message"></textarea>
         </div>
          
            <p>
              <button type="submit" class="rounded-lg bg-blue-600 text-white hover:shadow-md hover:shadow-blue-400/50 px-4 py-1">Contact us</button>
            </p>
            <p class="ml-2 mt-3 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text font-semibold text-xs text-transparent">
            * We will setup a trial version for you and send you the link to your email.
          </p>
          </form>
      </div>`;
}, "C:/Users/nitis/Desktop/Dev Projects/terrestrial-trappist/src/components/ContactForm.astro", void 0);

const $$Astro$1 = createAstro();
const $$Youtube = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Youtube;
  return renderTemplate`${maybeRenderHead()}<div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px" fill="url(#PgB_UHa29h0TpFV_moJI9a)"><linearGradient id="PgB_UHa29h0TpFV_moJI9a" x1="9.816" x2="41.246" y1="9.871" y2="41.301" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f44f5a"></stop><stop offset=".443" stop-color="#ee3d4a"></stop><stop offset="1" stop-color="#e52030"></stop></linearGradient><path fill="url(#PgB_UHa29h0TpFV_moJI9a)" d="M45.012,34.56c-0.439,2.24-2.304,3.947-4.608,4.267C36.783,39.36,30.748,40,23.945,40	c-6.693,0-12.728-0.64-16.459-1.173c-2.304-0.32-4.17-2.027-4.608-4.267C2.439,32.107,2,28.48,2,24s0.439-8.107,0.878-10.56	c0.439-2.24,2.304-3.947,4.608-4.267C11.107,8.64,17.142,8,23.945,8s12.728,0.64,16.459,1.173c2.304,0.32,4.17,2.027,4.608,4.267	C45.451,15.893,46,19.52,46,24C45.89,28.48,45.451,32.107,45.012,34.56z"></path><path d="M32.352,22.44l-11.436-7.624c-0.577-0.385-1.314-0.421-1.925-0.093C18.38,15.05,18,15.683,18,16.376	v15.248c0,0.693,0.38,1.327,0.991,1.654c0.278,0.149,0.581,0.222,0.884,0.222c0.364,0,0.726-0.106,1.04-0.315l11.436-7.624	c0.523-0.349,0.835-0.932,0.835-1.56C33.187,23.372,32.874,22.789,32.352,22.44z" opacity=".05"></path><path d="M20.681,15.237l10.79,7.194c0.689,0.495,1.153,0.938,1.153,1.513c0,0.575-0.224,0.976-0.715,1.334	c-0.371,0.27-11.045,7.364-11.045,7.364c-0.901,0.604-2.364,0.476-2.364-1.499V16.744C18.5,14.739,20.084,14.839,20.681,15.237z" opacity=".07"></path><path fill="#fff" d="M19,31.568V16.433c0-0.743,0.828-1.187,1.447-0.774l11.352,7.568c0.553,0.368,0.553,1.18,0,1.549	l-11.352,7.568C19.828,32.755,19,32.312,19,31.568z"></path></svg>
</div>`;
}, "C:/Users/nitis/Desktop/Dev Projects/terrestrial-trappist/src/components/icons/youtube.astro", void 0);

const $$Astro = createAstro();
const $$YoutubePlaylist = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$YoutubePlaylist;
  return renderTemplate`${maybeRenderHead()}<div>
    <a href="https://www.youtube.com/watch?v=HuGzHHk8B_M&list=PLGi_-BCQiKruw83cC0ON5nPRnac8b0uin" target="_blank" class="flex flex-row no-underline font-bold">
        <span>
            ${renderComponent($$result, "Youtube", $$Youtube, {})}
        </span><div class="ml-4 mt-2">Watch our Youtube Palylist</div>
    </a>
</div>
<!-- shortcutTailwind:flex flex-row no-underline font-bold rounded-lg border-2 border-solid border-indigo-400 px-4 -->`;
}, "C:/Users/nitis/Desktop/Dev Projects/terrestrial-trappist/src/components/YoutubePlaylist.astro", void 0);

const frontmatter = {
  "title": "Welcome to Task Manager",
  "description": "Get started building your docs site with Starlight.",
  "template": "splash",
  "hero": {
    "tagline": "A productivity powerhouse!",
    "image": {
      "file": "../../assets/featured-image.png"
    },
    "actions": [{
      "text": "Explore our guide",
      "link": "/guides/2-clients/",
      "icon": "right-arrow",
      "variant": "primary"
    }, {
      "text": "Go to Task Manager App",
      "link": "https://t3-task-manager.vercel.app/",
      "variant": "secondary",
      "icon": "external"
    }]
  }
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {
    children: [createVNode($$CardGrid, {
      children: createVNode($$Card, {
        title: "Video Demo",
        children: createVNode($$YoutubePlaylist, {})
      })
    }), "\n", createVNode($$ContactForm, {}), "\n"]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}

__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/docs/index.mdx";
const file = "C:/Users/nitis/Desktop/Dev Projects/terrestrial-trappist/src/content/docs/index.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/nitis/Desktop/Dev Projects/terrestrial-trappist/src/content/docs/index.mdx";

export { Content, Content as default, file, frontmatter, getHeadings, url };
