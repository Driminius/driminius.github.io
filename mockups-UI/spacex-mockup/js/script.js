const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
// this is a class not id 
const counters = document.querySelectorAll('.counter'); 
let scrollStarted = false;

btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage);
function navToggle() {
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling');
    menu.classList.toggle('show-menu');
}

function scrollPage() {
    const scrollPos = window.scrollY;

    if (scrollPos > 100 && !scrollStarted) {
        countUp();
        scrollStarted = true;
    } else if ( scrollPos < 100 && scrollStarted) {
        reset();
        scrollStarted = false;
    }
}

function countUp() {
    counters.forEach((counter)=> {
        console.log(counter);
        counter.innerText = '0';
        // get data-target value using getAttribute()
        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const c = +counter.innerText;

            // Create an increment
            const increment = target / 100;

            // If counter is less than target, then add increment
            if ( c < target ) {
                // Round up and set the counter value
                counter.innerText = `${Math.ceil(c + increment)}`;
                setTimeout(updateCounter, 75); 
                
            } else {
                counter.innerText = target;
            }
        }
        updateCounter();
    });

}

function reset() {
    counters.forEach( (counter) => (counter.innerHTML = '0'));
}