let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/dental-care.jpg') {
      myImage.setAttribute ('src','images/teeth.jpeg');
    } else {
      myImage.setAttribute ('src','images/dental-care.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Dental Clinic, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Dental Clinic, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
