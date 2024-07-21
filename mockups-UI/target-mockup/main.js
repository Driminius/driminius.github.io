var leftBtn = document.getElementById('btn-left');
leftBtn.innerText= '<';
var rightBtn= document.getElementById('btn-right');
rightBtn.innerText= '>';
var gal = document.getElementById('galContainer');
var cont = document.getElementById('gallery');
var shiftValue = 0;

leftBtn.addEventListener('click', () => {
    console.log('hello world');

    // when clicked grab the gallery and shift to the left
    shiftLeft(gal);
});

rightBtn.addEventListener('click', ()=> {
    console.log('hello world right');
    shiftRight(gal);
});

function shiftLeft( elem ) {
    shiftValue -= 100;
    gal.style.transition = 'transform 0.4s ease-in-out';
    gal.style.transform = 'translateX(' + shiftValue + 'px' + ')';
    
}

function shiftRight( elem ) {
    shiftValue += 100;
    gal.style.transition = 'transform 0.4s ease-in-out';
    gal.style.transform = 'translateX(' + shiftValue + 'px' + ')';

}

// just add and remove classes for responsiveness

const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

// this will call toggle to open
// go to dev tools to see the appended class
// after finding that class go to the CSS stylesheet
// and modify the class to change the behavior
// in this case
// changing hamburger icon to X
function navToggle() {
    btn.classList.toggle('open');
    nav.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll');
    nav.style.zIndex = 200;
}

btn.addEventListener('click', navToggle)