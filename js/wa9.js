const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = "It was 94 fahrenheit inside the bunker... Things we're getting hot :insertx: knew they needed to do something, and fast, or everyone would die. When he got to :inserty:, he stared in horror as the large power source glowed a dangerous red, with Arabelle, his lover, trapped behind the door. The reactor suddenlt :insertz:. It was a tragedy, without the :inserty: It was hopeless. :insertx: had no other choice but to die, leaving Arabelle to fend for herself in this tragic apocalypse."

const insertX = ["Harry", "Percy", "Kane"]
const insertY = ["the generator","the reactor","the core"]
const insertZ = ["spontaneously combusted","oozed into thick radioactive lava","exploded into millions of debris"]

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll("Arabelle", name)

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14);
    let stones = weight.toString().concat(' ', "stones");
    newStory = newStory.replaceAll("300 pounds", stones);

    const temperature =  Math.round((94-32)*(5/9));
    let centi = temperature.toString().concat(' ',"centigrade")
    newStory = newStory.replaceAll("94 fahrenheit", centi)

  }

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);
 
  newStory = newStory.replaceAll(":insertz:", zItem);
  newStory = newStory.replaceAll(":inserty:", yItem);
  newStory = newStory.replaceAll(":insertx:", xItem);

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
