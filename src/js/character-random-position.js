export default class RandomPosition {
  constructor() {
    this._randomList = new Set();
  }
  start() {
    while ([...this._randomList].length < 16)
      this._randomList.add(Math.floor(Math.random() * 16));
    let n = 0;
    setInterval(() => {
      const images = [...document.querySelectorAll("img")];
      const activPosition = images.find(
        (el) => !el.classList.contains("visible")
      );
      const pos = [...this._randomList][n];
      if (activPosition) {
        activPosition.classList.add("visible");
        images.at(pos).classList.remove("visible");
      } else {
        images.at(pos).classList.remove("visible");
      }
      n >= 15 ? (n = 0) : n++;
    }, 1000);
  }
}
