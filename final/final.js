// Get the modal for allfive images...
var modal1 = document.getElementById('myModal1');
var modal2 = document.getElementById('myModal2');
var modal3 = document.getElementById('myModal3');
var modal4 = document.getElementById('myModal4');
var modal5 = document.getElementById('myModal5');


// Get the image and insert it inside the modal - use its "alt" text as a caption

var modalImg1 = document.getElementById("img01");
var modalImg2 = document.getElementById("img02")
var modalImg3 = document.getElementById("img03");
var modalImg4 = document.getElementById("img04")
var modalImg5 = document.getElementById("img05")

var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
var box4 = document.getElementById('box4');
var box5 = document.getElementById('box5');

const caption1 = document.querySelector('#caption1')

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

box1.addEventListener('click',newFact);

let factiod = "fact";
let newTidbit = factiod;

const facts = ["The tv owner has been missing for years, only the static still buzzes", "Miraculously, his plant is still alive and the lights... always on.", "It is said that the young boy who used to sit here simply vanished, right... into... the screen"]

function newFact() {
    let newTidbit = factiod;
    let sentence = randomValueFromArray(facts);
    newTidbit = newTidbit.replaceAll(factoid, sentence);
}

caption1.textContent = newTidbit;
console.log(caption1.textContent);

box1.onclick = function(){
    modal1.style.display = "block";

}

box2.onclick = function(){
    modal2.style.display = "block";
    captionText1.innerHTML = this.alt;
}

box3.onclick = function(){
    console.log("click")
    modal3.style.display = "block";
    captionText3.innerHTML = this.alt;
}

box4.onclick = function(){
    console.log("click")
    modal4.style.display = "block";
    captionText4.innerHTML = this.alt;
}

box5.onclick = function(){
    console.log("click")
    modal5.style.display = "block";
    captionText5.innerHTML = this.alt;
}
 
 
// When the user clicks on <span> (x), close the modal
modal1.onclick = function() {
    img01.className += " out";
    setTimeout(function() {
       modal1.style.display = "none";
       img01.className = "modal-content";
     }, 400);
    
 }   

 modal2.onclick = function() {
    img02.className += " out";
    setTimeout(function() {
       modal2.style.display = "none";
       img02.className = "modal-content";
     }, 400);
    
 }   

 modal3.onclick = function() {
    img03.className += " out";
    setTimeout(function() {
       modal3.style.display = "none";
       img03.className = "modal-content";
     }, 400);
    
 }   

 modal4.onclick = function() {
    img02.className += " out";
    setTimeout(function() {
       modal4.style.display = "none";
       img04.className = "modal-content";
     }, 400);
    
 }   

 modal5.onclick = function() {
    img05.className += " out";
    setTimeout(function() {
       modal5.style.display = "none";
       img05.className = "modal-content";
     }, 400);
    
 }   