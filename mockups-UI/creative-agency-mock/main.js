const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');


toggle.addEventListener('click', toggleClick )
function toggleClick() {

    /* my original logic
    if (toggle.className == 'toggle') {
        toggle.className = 'toggle active';
    navigation.className = 'navigation active';
    } else if ( toggle.className == 'toggle active') {
        toggle.className = 'toggle';
        navigation.className = 'navigation';
    }
    */
    

    /* toggle is a built-in javascript function that 
    handles adding and removing classes */
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

