console.log("JS loaded");
function hereNow(event) {
  event.preventDefault();
}

new Typewriter("#typewriter", {
  strings: ["lalalalal"],
  autoStart: true,
  delay: 50,
  cursor: "|",
});

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", hereNow);

let poemElement = document.querySelector("#poem");
poemElement.innerHTML = "titres bien";
