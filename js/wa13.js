let x = Math.random().toFixed(3)
let y = (100*Math.random()).toFixed(3)
let z = (10*Math.random()).toFixed(3)
let a = (10*Math.random()).toFixed(0)

let result = (x-y)*z/a
let ans = result.toFixed(3)
console.log(ans)

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generate() {
    document.getElementById("p1").innerHTML= "("+ x + " - " + y + ")" + " x " + z + "/"+ a + ' = ?';
}

function returnAns() {
    let input = document.getElementById("answer").value;
    if (ans == input) {
        alert('You have successfully changed you volume! Please reload this page to change again.')
    }
    else {
        alert('You have failed to change your volume. Reload the page to try again.')
    }
}

function returnVol() {
    let vol = document.getElementById("volume").value;
    alert('Your desired volume is: ' + vol + ", please solve the equation to confirm your change.");
}