const h2 = document.getElementById("spirit-animal");
const input = document.getElementById("name-input");
const button = document.getElementById("submit");
//const form = document.getElementById("sprit-form");
const spiritAnimals = ["Tiger", "Bear", "dragon", "dolphin"];

function getRandomNumber() {
  return Math.floor(Math.random() * spiritAnimals.length);
}

function showSpiritAnimal() {
  const userInput = input.value.trim();
  if (userInput) {
    const spiritAnimal = spiritAnimals[getRandomNumber()];
    const userSpiritName = `${userInput} -- ${spiritAnimal}`;
    h2.innerHTML = userSpiritName;
  }
  if (!userInput) {
    alert("There is no input");
  }
}
let eventType = "click";
//let eventType = "mouseover";
const radios = document.getElementsByName("event-type");

function handleRadioClickEvent(event) {
  button.removeEventListener("eventType", showSpiritAnimal);
  eventType = event.target.value;
  button.addEventListener(eventType, showSpiritAnimal);
}
radios.forEach((radio) => {
  radio.addEventListener("click", handleRadioClickEvent);
  //radio.addEventListener("mouseover", handleRadioClickEvent);
});

button.addEventListener("click", showSpiritAnimal);
