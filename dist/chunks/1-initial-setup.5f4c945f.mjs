import { _ as __astro_tag_component__, F as Fragment, h as createVNode } from './astro.760ec1ef.mjs';
import { a as $$Image } from './pages/404.astro.54dfa868.mjs';
import { $ as $$Utterances } from './Utterances.258ac861.mjs';
import 'html-escaper';
/* empty css                        */import 'node:path';
/* empty css                                                             */import 'node:url';
import 'execa';
/* empty css                                                                   */
const __0__________assets_guides_initial_setup_application_prefs_png__ = {"src":"/_astro/application-prefs.4f6d0178.png","width":1920,"height":1080,"format":"png"};

const __1__________assets_guides_initial_setup_test_with_dymmy_data_png__ = {"src":"/_astro/test-with-dymmy-data.e2516f02.png","width":1631,"height":921,"format":"png"};

const __2__________assets_guides_initial_setup_delete_app_png__ = {"src":"/_astro/delete-app.3957aed7.png","width":1920,"height":1080,"format":"png"};

const __3__________assets_guides_initial_setup_import_clients_png__ = {"src":"/_astro/import-clients.10369cd3.png","width":1920,"height":1080,"format":"png"};

const frontmatter = {
  "title": "Initial Setup",
  "description": "First step towards using this application."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "save-application-preferences",
    "text": "Save Application Preferences"
  }, {
    "depth": 2,
    "slug": "try-it-out-with-dummy-data",
    "text": "Try it out with dummy data"
  }, {
    "depth": 2,
    "slug": "delete-app-data",
    "text": "Delete App Data"
  }, {
    "depth": 3,
    "slug": "delete-app-data-except-user-data-and-app-preferences",
    "text": "Delete app data except user data and app preferences"
  }, {
    "depth": 3,
    "slug": "delete-entire-application-data",
    "text": "Delete entire application data"
  }, {
    "depth": 2,
    "slug": "import-your-clients",
    "text": "Import your clients"
  }];
}
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    a: "a",
    h2: "h2",
    ul: "ul",
    li: "li",
    h3: "h3",
    aside: "aside",
    svg: "svg",
    path: "path",
    section: "section"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "When you first open the application you will find that it\u2019s pre populated with dummy data.\nYou can try it out or you can delete it. Then you can start it with blank."
    }), "\n", createVNode(_components.p, {
      children: "First step would be to save you application preferences.\nGo to settings.\nThere you will find three tabs - Preferences, Role Setting & advanced."
    }), "\n", createVNode(_components.p, {
      children: ["You can also import you previous clients into this application.\nRead ", createVNode(_components.a, {
        href: "/guides/",
        children: "this guide"
      }), " to see how it\u2019s done."]
    }), "\n", createVNode(_components.h2, {
      id: "save-application-preferences",
      children: "Save Application Preferences"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "When you start with this application, you should first savae your application preferences."
      }), "\n", createVNode(_components.li, {
        children: "It\u2019s like you company\u2019s profile, tax settings etc."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode($$Image, {
        src: __0__________assets_guides_initial_setup_application_prefs_png__,
        alt: "Application Preferences"
      })
    }), "\n", createVNode(_components.h2, {
      id: "try-it-out-with-dummy-data",
      children: "Try it out with dummy data"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Navigate to Setting > Advanced."
      }), "\n", createVNode(_components.li, {
        children: "Click on the switch to enable beow buttons."
      }), "\n", createVNode(_components.li, {
        children: "Click on Test with dummy data."
      }), "\n", createVNode(_components.li, {
        children: ["Proceed with the confirmation prompt.\n", createVNode($$Image, {
          src: __1__________assets_guides_initial_setup_test_with_dymmy_data_png__,
          alt: "test-with dummy data"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "delete-app-data",
      children: "Delete App Data"
    }), "\n", createVNode(_components.h3, {
      id: "delete-app-data-except-user-data-and-app-preferences",
      children: "Delete app data except user data and app preferences"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Navigate to Setting > Advanced."
      }), "\n", createVNode(_components.li, {
        children: "Click on the switch to enable beow buttons."
      }), "\n", createVNode(_components.li, {
        children: "Click on Delete and then choose Delete All data except user\u2019s data."
      }), "\n", createVNode(_components.li, {
        children: "Proceed with the confirmation prompt"
      }), "\n"]
    }), "\n", createVNode("iframe", {
      width: "560",
      height: "600",
      src: "https://www.youtube.com/embed/HuGzHHk8B_M",
      title: "YouTube video player",
      frameborder: "0",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      allowfullscreen: true
    }), "\n", createVNode(_components.h3, {
      id: "delete-entire-application-data",
      children: "Delete entire application data"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Navigate to Setting > Advanced"
      }), "\n", createVNode(_components.li, {
        children: "Click on Delete and then choose Delete All ."
      }), "\n", createVNode(_components.li, {
        children: ["Proceed with the confirmation prompt\n", createVNode($$Image, {
          src: __2__________assets_guides_initial_setup_delete_app_png__,
          alt: "Delete app screenshot"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "import-your-clients",
      children: "Import your clients"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Navigate to Setting > Advanced"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Click on Pick CSV or excel file."
        }), "\n", createVNode(_components.aside, {
          "aria-label": "Note",
          class: "starlight-aside starlight-aside--note",
          children: [createVNode(_components.p, {
            class: "starlight-aside__title",
            "aria-hidden": "true",
            children: [createVNode(_components.svg, {
              viewBox: "0 0 24 24",
              width: "16",
              height: "16",
              fill: "currentColor",
              class: "starlight-aside__icon",
              children: createVNode(_components.path, {
                d: "M12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11ZM12.38 7.08C12.1365 6.97998 11.8635 6.97998 11.62 7.08C11.4973 7.12759 11.3851 7.19896 11.29 7.29C11.2017 7.3872 11.1306 7.49882 11.08 7.62C11.024 7.73868 10.9966 7.86882 11 8C10.9992 8.13161 11.0245 8.26207 11.0742 8.38391C11.124 8.50574 11.1973 8.61656 11.29 8.71C11.3872 8.79833 11.4988 8.86936 11.62 8.92C11.7715 8.98224 11.936 9.00632 12.099 8.99011C12.2619 8.97391 12.4184 8.91792 12.5547 8.82707C12.691 8.73622 12.8029 8.61328 12.8805 8.46907C12.9582 8.32486 12.9992 8.16378 13 8C12.9963 7.73523 12.8927 7.48163 12.71 7.29C12.6149 7.19896 12.5028 7.12759 12.38 7.08ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"
              })
            }), "Note"]
          }), createVNode(_components.section, {
            class: "starlight-aside__content",
            children: createVNode(_components.p, {
              children: "You should first download sample CSV file to know the appropriate column fields. You can download it and then add your clients to it keeping the column names same and then upload it."
            })
          })]
        }), "\n", createVNode(_components.p, {
          children: createVNode($$Image, {
            src: __3__________assets_guides_initial_setup_import_clients_png__,
            alt: "Import clients"
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Watch this video"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode("div", {
      class: "not-content ml-10",
      children: createVNode("iframe", {
        width: "560",
        height: "315",
        src: "https://www.youtube.com/embed/nzhbdm83hrk?si=plLXueui_T2TFY3F",
        title: "YouTube video player",
        frameborder: "0",
        allow: "",
        allowfullscreen: true
      })
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

__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/docs/guides/1-initial-setup.mdx";
const file = "C:/Users/nitis/Desktop/Dev Projects/terrestrial-trappist/src/content/docs/guides/1-initial-setup.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/nitis/Desktop/Dev Projects/terrestrial-trappist/src/content/docs/guides/1-initial-setup.mdx";

export { Content, Content as default, file, frontmatter, getHeadings, url };
