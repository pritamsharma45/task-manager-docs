const id = "index.mdx";
						const collection = "docs";
						const slug = "index";
						const body = "\nimport { Card, CardGrid } from \"@astrojs/starlight/components\";\nimport ContactForm from \"../../components/ContactForm.astro\";\nimport Youtube from \"../../components/YoutubePlaylist.astro\";\nimport Comments from \"../../components/Utterances.astro\";\n\n<CardGrid>\n  <Card title=\"Video Demo\">\n    <Youtube />\n  </Card>\n  {/* <Card title=\"Configure your site\" icon=\"setting\">\n    Edit your `sidebar` and other config in `astro.config.mjs`.\n  </Card>\n  <Card title=\"Read the docs\" icon=\"open-book\">\n    Learn more in [the Starlight Docs](https://starlight.astro.build/).\n  </Card> */}\n</CardGrid>\n<ContactForm />\n{/* <div class=\"not-content\">\n  <Comments />\n</div> */}\n";
						const data = {title:"Welcome to Task Manager",description:"Get started building your docs site with Starlight.",editUrl:true,head:[],template:"splash",hero:{tagline:"A productivity powerhouse!",image:{alt:"",file:{src:"/_astro/featured-image.5d18f193.png",width:1915,height:979,format:"png",orientation:void 0}},actions:[{text:"Explore our guide",link:"/guides/2-clients/",variant:"primary",icon:{type:"icon",name:"right-arrow"}},{text:"Go to Task Manager App",link:"https://t3-task-manager.vercel.app/",variant:"secondary",icon:{type:"icon",name:"external"}}]},sidebar:{hidden:false}};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/nitis/Desktop/Dev Projects/terrestrial-trappist/src/content/docs/index.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
