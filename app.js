// Cache at least one element using 'selectElementById'
const secHome = document.getElementById('home');
secHome.style.background = 'var(--primary-color)';

//Cache at least one element using 'querySelector' or 'querySelectorAll'
const secCare = document.querySelector('h2');
secCare.style.background = 'var(--secondary-color)'; 

/**
 * use the parent-child-sibiling relationship to navigate between
 * elements at leaste once (firstChild, lastChild, parentNode, nextElementSibiling, etc...)
*/


// iterate over a collection of elements to accomplish some task
const doSomething = document.querySelectorAll('.dis');
doSomething.forEach(doSomething => {
    doSomething.style.color = 'var(--fifth-color)';
    doSomething.style.background = 'black';
    doSomething.style.fontSize = '1em';
})

const navA = document.querySelectorAll('nav');
navA.forEach(anchorList =>{
    anchorList.style.background = 'var(--third-color)';
})


//Create at least one element using 'createElement'
const paragraph = document.getElementById('newTitle');
const newEl = document.createElement('div')
paragraph.textContent = 'YERRRRRRR New title Here';
paragraph.style.textAlign = 'center';
paragraph.style.background = "var(--sixtg-color)";
paragraph.appendChild(newEl);

// Use appendChild and/ prepend to add a neew elements to the DOM

const testing = document.getElementById('newTitleTwo');
const newDiv = document.createElement('div');
testing.textContent = "Im New Here";
testing.prepend(newDiv);
testing.style.color = 'blue';
testing.style.textAlign = 'center';
testing.style.background = 'var(--third-color)';


/**
 * use the documentFragment interfcae or HTML templating
 * with the CloneNode method to create templated content
 */

const catName = document.getElementById('meToby')
const frag = document.createDocumentFragment();
let newElTwo = document.createElement('li');
let newElThree = document.createElement('li');

newElTwo.textContent = "HI my name is Toby";
newElThree.textContent = "My name is Cookie";

frag.appendChild(newElTwo);
frag.appendChild(newElThree);

catName.appendChild(frag);

/** 
 *  Modify the HTML or text content of at least one element
 * in response to user interaction using 
 * innerHTML, innerText, textContent
*/


