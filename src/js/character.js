export default class Character {
  constructor(element) {
    this.element = element;
    const img = document.createElement("img");
    img.classList.add("characters", "visible");
    img.setAttribute(
      "src",
      "https://github.com/netology-code/ahj-homeworks/raw/video/dom/pic/goblin.png"
    );
    img.setAttribute("alt", "Goblin photo");
    this.element.insertAdjacentElement("afterbegin", img);
  }
}
