const caption1 = document.querySelector('#caption1')
const randomize = document.querySelector('.randomize');

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

randomize.addEventListener('click',newFact);

let factiod = "fact";
let newTidbit = factiod;

const facts = ["The tv owner has been missing for years, only the static still buzzes", "Miraculously, his plant is still alive and the lights... always on.", "It is said that the young boy who used to sit here simply vanished, right... into... the screen"]

function newFact() {
    let newTidbit = factiod;
    let sentence = randomValueFromArray(facts);
    newTidbit = newTidbit.replaceAll(factoid, sentence);
}

caption1.textContent = newTidbit;
caption1.style.visibility = 'visible';
console.log(caption1.textContent);
