import sidebar from "./sidebar/sidebar.js";
import header from "./header/header.js";
import messages from "./messages/messages.js";

const rootElement = document.querySelector(".chat-app-root");

const appContainer = document.createElement("div");
appContainer.classList.add("app-container");

const sidebarContainer = document.createElement("aside");
sidebarContainer.classList.add("sidebar-container");
sidebarContainer.appendChild(sidebar);

const mainContent = document.createElement("main");
mainContent.classList.add("main-content");

mainContent.appendChild(header);
mainContent.appendChild(messages);

appContainer.appendChild(sidebarContainer);
appContainer.appendChild(mainContent);

rootElement.appendChild(appContainer);
