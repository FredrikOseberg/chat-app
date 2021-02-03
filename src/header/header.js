const buttons = [
  { src: "/assets/icons/phone.svg", alt: "phone" },
  { src: "/assets/icons/video.svg", alt: "video" },
  { src: "/assets/icons/ellipsis-v.svg", alt: "ellipsis" },
];

const createHeader = () => {
  const header = document.createElement("header");
  header.classList.add("chat-header");

  const headerText = document.createElement("h1");
  headerText.classList.add("header-text");
  headerText.textContent = "Chat with Chris";

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("header-button-container");

  buttons.forEach((buttonData) => {
    const newButton = createHeaderButton(buttonData.src, buttonData.alt);
    buttonContainer.appendChild(newButton);
  });

  header.appendChild(headerText);
  header.appendChild(buttonContainer);

  return header;
};

const createHeaderButton = (src, alt) => {
  const button = document.createElement("button");
  button.classList.add("header-button");

  const image = document.createElement("img");

  image.src = src;
  image.alt = alt;

  button.appendChild(image);
  return button;
};

export default createHeader();
