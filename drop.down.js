

export default function DroopDown() {  
    const dropDown = document.querySelectorAll('[data-dropdow]');
    
    dropDown.forEach((menu) => {
        ['touchstart', 'click'].forEach((eventoDown) => {
            menu.addEventListener(eventoDown, handleClick);
        });
    });
    
    function handleClick(event) {
        event.preventDefault();
        this.classList.toggle('active');
    };
};