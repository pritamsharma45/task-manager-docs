import { _ as __astro_tag_component__, F as Fragment, h as createVNode } from './astro.760ec1ef.mjs';
import './pages/404.astro.54dfa868.mjs';
import { $ as $$Utterances } from './Utterances.258ac861.mjs';
import 'html-escaper';
/* empty css                        */import 'node:path';
/* empty css                                                             */import 'node:url';
import 'execa';
/* empty css                                                                   */
const frontmatter = {
  "title": "Managing Tasks",
  "description": "This guid will help you to understant how to get most out of the tasks page of this application"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "all-the-fields-associated-with-a-task",
    "text": "All the fields associated with a task"
  }, {
    "depth": 2,
    "slug": "adding-editing-and-delting-task",
    "text": "Adding, editing and delting task"
  }, {
    "depth": 2,
    "slug": "action-buttons-associated-with-each-task",
    "text": "Action buttons associated with each task"
  }, {
    "depth": 2,
    "slug": "filters-and-sorting",
    "text": "Filters and sorting"
  }];
}
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    h2: "h2",
    ul: "ul",
    li: "li",
    a: "a"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Guides lead a user through a specific task they want to accomplish, often with a sequence of steps.\nWriting a good guide requires thinking about what your users are trying to do."
    }), "\n", createVNode(_components.h2, {
      id: "all-the-fields-associated-with-a-task",
      children: "All the fields associated with a task"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Client: It could be any client for whom you are managing task. You will be managing the list of clients in Dropdowns menu. See this guide."
      }), "\n", createVNode(_components.li, {
        children: "Task: It could be any higher level goal or task. You will be managing the list of possible task types in Dropdowns menu. See this guide."
      }), "\n", createVNode(_components.li, {
        children: "Activity: It could be any activity that will be required to complete any task. Generally you will have multiple activities that needs to be performed in order to complete some task. You will be managing the list of activities in Dropdowns menu. See this guide."
      }), "\n", createVNode(_components.li, {
        children: "Description: It describes your activities that need to be performed."
      }), "\n", createVNode(_components.li, {
        children: "User: You can assign user to the task. Read this guid to learn about how to add or invite users."
      }), "\n", createVNode(_components.li, {
        children: "Deadline Date: Deadline date of the task."
      }), "\n", createVNode(_components.li, {
        children: "Reminder Date: You can set up reminder date as well."
      }), "\n", createVNode(_components.li, {
        children: "Periodicity: It could be any one from thes - One_Off, Weekly, Monthly, Quarterly, Half_Yearly and Yearly."
      }), "\n", createVNode(_components.li, {
        children: "Priority: You can set the priority of the task. Possible values are High, Medium or Low."
      }), "\n", createVNode(_components.li, {
        children: "Status: Completed or Pending"
      }), "\n", createVNode(_components.li, {
        children: "Timesheet Entry status: If you have done timesheet entry for a task then this status will appear in the form of Ticked Clock."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "adding-editing-and-delting-task",
      children: "Adding, editing and delting task"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Navigate to Tasks page. Then click on Add Button."
      }), "\n", createVNode(_components.li, {
        children: "Alternativiy, you can also add a new task from Clients page. Navigate to Clients page. Select any client and then click on Related Tasks. Here you can add a new task for the selected client. You can add multiple tasks for the same clients and edit it by clicking on edit button."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://youtu.be/pGoVpOmEC-s",
        children: "https://youtu.be/pGoVpOmEC-s"
      })
    }), "\n", createVNode(_components.h2, {
      id: "action-buttons-associated-with-each-task",
      children: "Action buttons associated with each task"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Mark Complete"
      }), "\n", createVNode(_components.li, {
        children: "Mark Complete and recreate"
      }), "\n", createVNode(_components.li, {
        children: "Task Notes"
      }), "\n", createVNode(_components.li, {
        children: "Add Timesheet"
      }), "\n", createVNode(_components.li, {
        children: "View Timesheets"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "filters-and-sorting",
      children: "Filters and sorting"
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
const url = "src/content/docs/guides/3-tasks.mdx";
const file = "C:/Users/nitis/Desktop/Dev Projects/terrestrial-trappist/src/content/docs/guides/3-tasks.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/nitis/Desktop/Dev Projects/terrestrial-trappist/src/content/docs/guides/3-tasks.mdx";

export { Content, Content as default, file, frontmatter, getHeadings, url };
