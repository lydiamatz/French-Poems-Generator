function displayPoem(response) {
  console.log("generated poem");
  new Typewriter("#poem", {
    strings: [response.data.answer],
    autoStart: true,
    delay: 1,
    cursor: "|",
  });
}

function hereNow(event) {
  event.preventDefault();

  let instructionsInputElement = document.querySelector("#instructions-input");
  let apiKey = "be6404to0e1a8c3df9e20496bf57b54b";
  let prompt = `User instructions: Generate a French poem about ${instructionsInputElement.value}`;

  let context =
    "You are a romantic Poem expert and love to write short poems. Your mission is to generate a 4 line French poem. Format the response as plain text with HTML line breaks (<br/>) between each line, but do not wrap the response in code blocks or backticks. Do not include a title. The poem should be about the user's input.";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("apiUrl");
  console.log("prompt");

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `Generating a French poem about <strong>${instructionsInputElement.value}</strong>...`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", hereNow);
