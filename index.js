// Write your code here!

const GetMain = document.getElementById('main');
GetMain.remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = "Dania is the champion";

const body = document.querySelector('body');
body.appendChild(newHeader);