const createContactCard = (name, imageUrl, message) => {
  const container = document.createElement("div");
  container.classList.add("contact-card-container");

  const image = document.createElement("img");
  image.classList.add("contact-card-image");
  image.src = imageUrl;

  const innerContainer = document.createElement("div");
  innerContainer.classList.add("contact-card-inner-container");

  const header = document.createElement("h2");
  header.classList.add("contact-card-header");
  header.textContent = name;

  const time = document.createElement("span");
  time.textContent = "11:13AM";

  const messageContent = document.createElement("p");
  messageContent.classList.add("contact-card-message");
  messageContent.textContent = message;

  header.appendChild(time);
  innerContainer.appendChild(header);
  innerContainer.appendChild(messageContent);

  container.appendChild(image);
  container.appendChild(innerContainer);

  return container;
};

export default createContactCard;
