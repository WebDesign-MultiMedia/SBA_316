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

const header = document.querySelector('header');
header.textContent = 'HI Toby';
 header.style.color = 'blue';
 header.style.background = 'var(--sixtg-color)';
    
/**
 * Modify the style and/or CSS classes of an element 
 * in response to user interactions using the 
 * style or classList properties.
 */

const allClass = document.querySelectorAll('.liStyle');

    allClass.forEach(allClass =>{
        allClass.style.background = 'var(--secondary-color)'
        allClass.style.textAlign = 'center'
        allClass.style.color = ' white';
        allClass.style.padding = '10px';
        allClass.style.width = '100px'
        allClass.style.display = 'inline-flex';
        allClass.style.justifyContent = 'center';
        allClass.style.borderRadius = '800px';
       allClass.style.border = '1px solid var(--fourth-color)' 
        allClass.style.boxShadow = '3px 3px 4px var(--primary-color)';
        allClass.addEventListener('click', () => {
                allClass.style.color = 'yellow'; 
                allClass.style.fontSize = '20px'; 
                allClass.style.background = 'red';
                })
        })
    
 

    /**
     * Modify at least one attribute of an 
     * element in response to user interaction.
     */

       const breeding = document.getElementById('breeds')
       breeding.style.borderRadius = "100%"
       breeding.addEventListener('click', () =>{

            if(breeding.style.background === 'yellow'){
                breeding.style.background = 'red';
            } else  {
                breeding.style.background = 'yellow';

            }

        })
  
        /**
         * Register at least two different event 
         * listeners and create the associated 
         * event handler functions.
         */

    const footFoot = document.querySelector('.newStyle');
    footFoot.addEventListener('click', () => {
        footFoot.style.background = 'red'
        footFoot.textContent = 'Cats 2024';
    })

    footFoot.addEventListener('mouseenter', () => {
        footFoot.style.background = 'yellow';
    })

    footFoot.addEventListener('mouseleave', () => {
        footFoot.style.background = 'pink';
    })


    /**
     * Use at least two 
     * Browser Object Model (BOM) properties or methods.
     */

 window.alert(window.innerHeight + " " + "innerHeight");
 alert(location.href + " " + 'Julio Salas'); 

 
/**
 * Include at least one form and/or 
 * input with DOM event-based validation. 
 * (This can be the same form or input as 
 * the one above, but should include 
 * event-based validation in addition
 *  to the HTML attribute validation.)
 */

function err(){
        let error = document.forms['myForm']['Cname'].value
        if(error == ""){
            alert('What is your cat name');
            return false;
        } else{
            alert('Thank you, that is a nice name');
        }
}