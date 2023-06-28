# Context API
## LAB - Class 31
### Author: Coriana Williams

### Problem Domain# Phase 1 Requirements
In Phase 1, we’re going to perform some refactoring of a Todo application built by another team. This application mixes application state and user settings at the top level and passes things around. It was a good proof of concept, but we need to make this production ready.

Phase 2 Requirements


Phase 3 Requirements


Phase 4 Requirements


### Links and Resources
- ![Sandbox URL1 - class 31](https://codesandbox.io/p/github/Coriana1/todo-app/main?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522panelType%2522%253A%2522TABS%2522%252C%2522id%2522%253A%2522cljf2kdzp000b3b6nmwa8kxrr%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522panelType%2522%253A%2522TABS%2522%252C%2522id%2522%253A%2522cljf2kdzp000d3b6no7gc1nyj%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522cljf2kdzp000b3b6nmwa8kxrr%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522cljf2kdzp000a3b6nv6hlck18%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%257D%255D%252C%2522id%2522%253A%2522cljf2kdzp000b3b6nmwa8kxrr%2522%252C%2522activeTabId%2522%253A%2522cljf2kdzp000a3b6nv6hlck18%2522%257D%252C%2522cljf2kdzp000d3b6no7gc1nyj%2522%253A%257B%2522id%2522%253A%2522cljf2kdzp000d3b6no7gc1nyj%2522%252C%2522activeTabId%2522%253A%2522cljf2l6ie00b23b6ng40wsewn%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522id%2522%253A%2522cljf2l6ie00b23b6ng40wsewn%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522port%2522%253A3000%252C%2522id%2522%253A%2522cljf2lcnp00fb3b6nyc6gjucs%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%2522%257D%255D%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D)



- ![GitHub Actions ci/cd](https://github.com/Coriana1/todo-app/actions)
## Collaborators
Kenya Womack

### Setup
#### `.env` requirements (where applicable)
for now I have none and do not require one
#### How to initialize/run your application (where applicable)
- e.g. `npm start`
#### How to use your library (where applicable)
#### Features / Routes
- Feature One: Details of feature
- GET : `/hello` - specific route to hit
#### Tests
- npm test
#### UML
![Phase 1 - Class 31](./assets/contextAPI.png)
