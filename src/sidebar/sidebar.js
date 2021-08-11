import { contacts, messages } from "../../data.js";
import createContactCard from "./contact-card.js";

const createSidebar = (setMessageSetId) => {
  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar-inner-container");

  const searchField = document.createElement("input");
  searchField.classList.add("sidebar-search-field");
  searchField.name = "search";
  searchField.placeholder = "Search for conversation";

  const contactsContainer = document.createElement("div");
  contactsContainer.classList.add("sidebar-contacts");

  contacts.forEach((contact) => {
    const message = messages[contact.id][0].content;
    const contactCard = createContactCard(
      contact.name,
      contact.imageUrl,
      message
    );

    contactCard.addEventListener("click", () => {
      setMessageSetId(contact.id);
    });

    contactsContainer.appendChild(contactCard);
  });

  sidebar.appendChild(searchField);
  sidebar.appendChild(contactsContainer);
  return sidebar;
};

export default createSidebar;
