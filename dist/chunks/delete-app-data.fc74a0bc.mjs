import { _ as __astro_tag_component__, F as Fragment, h as createVNode } from './astro.760ec1ef.mjs';
import './pages/404.astro.54dfa868.mjs';
import { $ as $$Utterances } from './Utterances.258ac861.mjs';
import 'html-escaper';
/* empty css                        */import 'node:path';
/* empty css                                                             */import 'node:url';
import 'execa';
/* empty css                                                                   */
const frontmatter = {
  "title": "Delete App Data",
  "description": "Delete your application data"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "",
    "text": ""
  }];
}
function _createMdxContent(props) {
  const _components = Object.assign({
      h2: "h2"
    }, props.components),
    {
      YouTube
    } = _components;
  if (!YouTube) _missingMdxReference("YouTube", true);
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: ""
    }), "\n", createVNode(YouTube, {
      id: "https://youtu.be/HuGzHHk8B_M"
    }), "\n", createVNode("div", {
      class: "not-content",
      children: createVNode($$Utterances, {})
    })]
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
  }) : _createMdxContent(props);
}

function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/docs/guides/delete-app-data.mdx";
const file = "C:/Users/nitis/Desktop/Dev Projects/terrestrial-trappist/src/content/docs/guides/delete-app-data.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/nitis/Desktop/Dev Projects/terrestrial-trappist/src/content/docs/guides/delete-app-data.mdx";

export { Content, Content as default, file, frontmatter, getHeadings, url };
