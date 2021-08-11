import createSidebar from "./sidebar/sidebar.js";
import header from "./header/header.js";
import createMessages from "./messages/messages.js";

import { contacts, messages } from "../data.js";

const rootElement = document.querySelector(".chat-app-root");

class App {
  constructor(rootEl) {
    this.rootElement = rootEl;
    this.messageSetId = contacts[0].id;
    this.messages = messages;
  }

  render = () => {
    const appContainer = document.createElement("div");
    appContainer.classList.add("app-container");

    const sidebar = createSidebar(this.setMessageSetId);

    const sidebarContainer = document.createElement("aside");
    sidebarContainer.classList.add("sidebar-container");
    sidebarContainer.appendChild(sidebar);

    const mainContent = document.createElement("main");
    mainContent.classList.add("main-content");

    const messages = createMessages(
      this.messageSetId,
      this.messages,
      this.updateMessages
    );
    mainContent.appendChild(header);
    mainContent.appendChild(messages);

    appContainer.appendChild(sidebarContainer);
    appContainer.appendChild(mainContent);

    rootElement.appendChild(appContainer);
  };

  setMessageSetId = (id) => {
    this.messageSetId = id;
    this.rootElement.innerHTML = "";
    this.rerender();
  };

  updateMessages = (messageObject, messageSetId) => {
    const messages = { ...this.messages };
    messages[messageSetId].push(messageObject);
    this.messages = messages;
    this.rerender();
  };

  rerender = () => {
    this.rootElement.innerHTML = "";
    this.render();
  };
}

const app = new App(rootElement);
app.render();
