import { contacts } from "../../data.js";

const currentUser = "177b547a-3261-11eb-adc1-0242ac120002";

const createMessages = (messageSetId, messages, updateMessages) => {
  const container = document.createElement("div");
  container.classList.add("main-content-container");

  const currentChat = messages[messageSetId];

  currentChat.forEach((message) => {
    let createdMessage;
    if (message.owner === currentUser) {
      createdMessage = createUserMessage(message);
    } else {
      createdMessage = createContactMessage(message);
    }
    container.appendChild(createdMessage);
  });

  const input = createChatInput(updateMessages, messageSetId);

  container.appendChild(input);

  return container;
};

const createChatInput = (updateMessages, messageSetId) => {
  const container = document.createElement("div");
  container.classList.add("chat-input-container");

  const input = document.createElement("input");
  input.placeholder = "Write your message here";
  input.name = "chat-message";
  input.classList.add("chat-input-message");

  const button = document.createElement("button");
  button.textContent = "Send";
  button.classList.add("chat-input-button");

  button.addEventListener("click", () => {
    const messageObject = {
      content: input.value,
      timestamp: 123001231,
      owner: "177b547a-3261-11eb-adc1-0242ac120002",
    };

    updateMessages(messageObject, messageSetId);
  });

  container.appendChild(input);
  container.appendChild(button);

  return container;
};

const createContactMessage = (message) => {
  const id = message.owner;
  const content = message.content;

  const contact = getContact(id);

  const container = document.createElement("div");
  container.classList.add("chat-contact-message");

  const image = document.createElement("img");
  image.src = contact.imageUrl;
  image.alt = contact.name;
  image.classList.add("chat-contact-image");

  const messageBox = createMessageBox(content, "chat-contact-message-box");

  container.appendChild(image);
  container.appendChild(messageBox);

  return container;
};

const createUserMessage = (message) => {
  return createMessageBox(message.content, "chat-user-message-box");
};

const createMessageBox = (content, className) => {
  const box = document.createElement("div");
  box.classList.add(className);
  box.textContent = content;

  return box;
};

const getContact = (id) => {
  return contacts.find((contact) => contact.id === id);
};

export default createMessages;
