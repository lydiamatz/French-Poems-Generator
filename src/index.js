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
    "You are a romantic Poem expert and love to write short poems. You mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("prompt");

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", hereNow);
