
 export default function menuMobile() { 
    const btnMobile = document.querySelector('.btn-mobile');
const nav = document.querySelector('.nav-menu');

function clicarBtn(event) {
    if(event.type === 'touchstart') {
        event.preventDefault();
    }
   nav.classList.toggle('ativo')
   event.currentTarget.setAttribute('aria-expanded', 'true')
}

btnMobile.addEventListener('click', clicarBtn);
btnMobile.addEventListener('touchstart', clicarBtn);
}



