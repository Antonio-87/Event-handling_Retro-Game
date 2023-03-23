export default class Results {
  constructor() {
    this.playingField = document.querySelector(".playing-field");
    this.hits = document.querySelector(".hits");
    this.misses = document.querySelector(".misses");
    this.lose = document.querySelector("p");
  }

  control() {
    this.playingField.addEventListener("click", (e) => {
      const target = e.target;
      if (!target.classList.contains("place")) {
        this.hits.textContent = Number(this.hits.textContent) + 1;
      } else {
        this.misses.textContent = Number(this.misses.textContent) + 1;
      }
      if (Number(this.misses.textContent) === 5) {
        this.lose.classList.toggle("lose");
        this.hits.textContent = 0;
        this.misses.textContent = 0;
        setTimeout(() => {
          this.lose.classList.toggle("lose");
        }, 2000);
      }
    });
  }
}
