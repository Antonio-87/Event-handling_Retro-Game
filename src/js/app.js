import Character from "./character";
import RandomPosition from "./character-random-position";
import Results from "./results";

document.addEventListener("DOMContentLoaded", () => {
  [...document.querySelectorAll(".place")].forEach((el) => {
    new Character(el);
  });
  const randomPosition = new RandomPosition();
  randomPosition.start();
  const results = new Results();
  results.control();
});
