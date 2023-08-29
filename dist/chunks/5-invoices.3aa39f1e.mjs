import { _ as __astro_tag_component__, F as Fragment, h as createVNode } from './astro.760ec1ef.mjs';
import { a as $$Image } from './pages/404.astro.54dfa868.mjs';
import { $ as $$Utterances } from './Utterances.258ac861.mjs';
import 'html-escaper';
/* empty css                        */import 'node:path';
/* empty css                                                             */import 'node:url';
import 'execa';
/* empty css                                                                   */
const __0__________assets_guides_invoices_stripe_generate_invoice_webp__ = {"src":"/_astro/stripe-generate-invoice.5cb17c64.webp","width":1920,"height":1080,"format":"webp"};

const __1__________assets_guides_invoices_stripe_invoice_webp__ = {"src":"/_astro/stripe-invoice.ab38d627.webp","width":1920,"height":1080,"format":"webp"};

const __2__________assets_guides_invoices_stripe_invoice_pdf_webp__ = {"src":"/_astro/stripe-invoice-pdf.2e1c8db7.webp","width":1920,"height":1080,"format":"webp"};

const __3__________assets_guides_invoices_stripe_paylink_webp__ = {"src":"/_astro/stripe-paylink.d2bdf883.webp","width":1920,"height":1080,"format":"webp"};

const frontmatter = {
  "title": "Invoicing",
  "description": "This guide will show you how to generate Stripe Invoice for outstanding tasks that have been billed in timesheet entry."
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "fetching-tasks-for-invoicing",
    "text": "Fetching tasks for invoicing"
  }, {
    "depth": 3,
    "slug": "view-stripe-invoice-pdf-and-paylink",
    "text": "View Stripe Invoice PDF and Paylink"
  }];
}
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    a: "a",
    h3: "h3",
    ul: "ul",
    li: "li",
    aside: "aside",
    svg: "svg",
    path: "path",
    section: "section"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["Before you move on to Invoice page manke sure you have created timesheet entry for the completed task.\r\n", createVNode(_components.a, {
        href: "/guides/4-creating-timesheet-entry",
        children: "See this guide"
      }), " to know how to create timesheet entry."]
    }), "\n", createVNode(_components.h3, {
      id: "fetching-tasks-for-invoicing",
      children: "Fetching tasks for invoicing"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Navigate to Invoices > Generate Invoice"
      }), "\n", createVNode(_components.li, {
        children: "Select Client against whom you want to raise invoice"
      }), "\n", createVNode(_components.li, {
        children: ["Click on Generate Stripe Invoice\r\n", createVNode($$Image, {
          src: __0__________assets_guides_invoices_stripe_generate_invoice_webp__,
          alt: "Generate Stripe Invoice"
        }), "\r\nAbove action will do the following:"]
      }), "\n", createVNode(_components.li, {
        children: "It will first create Stripe Customer if it does not exist."
      }), "\n", createVNode(_components.li, {
        children: "Then it will check if there is any outstanding tasks against the selected client."
      }), "\n", createVNode(_components.li, {
        children: "If there are outstanding tasks then it will generate Stripe Invoice for that."
      }), "\n", createVNode(_components.li, {
        children: [createVNode($$Image, {
          src: __1__________assets_guides_invoices_stripe_invoice_webp__,
          alt: "Stripe Invoices"
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
              children: "If generating Stripe customer fails due to Stripe\u2019s server downtime or any other reason then the invoice generation will fail. In that case you can simply refresh it and try again"
            })
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "view-stripe-invoice-pdf-and-paylink",
      children: "View Stripe Invoice PDF and Paylink"
    }), "\n", createVNode(_components.p, {
      children: "You can view the generated Invoice PDF and Payment page by clicking on the respective buttons on the Stripe Invoice tab."
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
          children: "When you generate Stripe Invoice, it will also send email to the client with attached invoice pdf and payment page."
        })
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Invoice PDF\r\n", createVNode($$Image, {
          src: __2__________assets_guides_invoices_stripe_invoice_pdf_webp__,
          alt: "Invoice PDF"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Payment page\r\n", createVNode($$Image, {
          src: __3__________assets_guides_invoices_stripe_paylink_webp__,
          alt: "Payment page"
        })]
      }), "\n"]
    }), "\n", createVNode("iframe", {
      width: "560",
      height: "315",
      src: "https://www.youtube.com/embed/l47mSnE9-eY?si=7edt3Ge8N2oR3qff",
      title: "YouTube video player",
      frameborder: "0",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      allowfullscreen: true
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
const url = "src/content/docs/guides/5-invoices.mdx";
const file = "C:/Users/nitis/Desktop/Dev Projects/terrestrial-trappist/src/content/docs/guides/5-invoices.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/nitis/Desktop/Dev Projects/terrestrial-trappist/src/content/docs/guides/5-invoices.mdx";

export { Content, Content as default, file, frontmatter, getHeadings, url };
