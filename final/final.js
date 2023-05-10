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

var captionText = document.getElementById("caption");

box1.onclick = function(){
    modal1.style.display = "block";
    captionText.innerHTML = this.alt;
}

box2.onclick = function(){
    console.log("click")
    modal2.style.display = "block";
}

box3.onclick = function(){
    console.log("click")
    modal3.style.display = "block";
    captionText.innerHTML = this.alt;
}

box4.onclick = function(){
    console.log("click")
    modal4.style.display = "block";
    captionText.innerHTML = this.alt;
}

box5.onclick = function(){
    console.log("click")
    modal5.style.display = "block";
    captionText.innerHTML = this.alt;
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