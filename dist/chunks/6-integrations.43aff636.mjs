const id = "guides/6-integrations.mdx";
						const collection = "docs";
						const slug = "guides/6-integrations";
						const body = "\r\nimport CalendarIcon from \"../../../components/icons/calendar.astro\";\r\nimport SlackIcon from \"../../../components/icons/slack.astro\";\r\nimport DriveIcon from \"../../../components/icons/drive.astro\";\r\nimport Comments from \"../../../components/Utterances.astro\";\r\n\r\n## Following integrations are supported\r\n\r\n### Slack\r\n\r\n<SlackIcon />\r\n![Slack Integration](../../../assets/guides/integrations/slack-integration.png) You\r\ncan send your created clients, task, client notes or task notes to different slack\r\nchannel. You will have to choose from different slack channel that you have created\r\nand map it to corresponding form submission.\r\n\r\n:::note\r\nYou can only send messages to public channel. By public channel it means that anyone in your workspace can message to this channel.\r\n:::\r\n\r\n### Google Calendar\r\n\r\n<CalendarIcon />\r\n\r\n![Google Calendar Integration](../../../assets/guides/integrations/google-calendar-authorization.png)\r\n\r\n:::note\r\nThis authorization is different from the application authorization. This\r\nis Google authorization. You need to be signed in to your google account. Once authorized\r\nyou will be presented with a list of your google calendars.\r\n:::\r\n\r\n### Google Drive\r\n\r\n<DriveIcon />\r\n![Google Drive Integration](../../../assets/guides/integrations/google-drive-setting.png)\r\n\r\n:::note\r\nThe Google Drive folder where you want to store your files related to client\r\nnotes and task notes need to be shared with the service account email address.\r\n:::\r\n\r\n<div class=\"not-content\">\r\n  <Comments />\r\n</div>\r\n";
						const data = {title:"Other App Integrations",description:"This will guide you in setting up 3rd party app integrations.",editUrl:true,head:[],template:"doc",sidebar:{hidden:false}};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/nitis/Desktop/Dev Projects/terrestrial-trappist/src/content/docs/guides/6-integrations.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
