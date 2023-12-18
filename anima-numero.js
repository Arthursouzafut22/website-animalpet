
export default function animaNum() {
    const numeros = document.querySelectorAll('[data-numero]');
    numeros.forEach((numero) => {
    const total = +numero.innerText;
    const add = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
        start = start + add;
        numero.innerText = start;
        if(start > total) {
            numero.innerText = total;
            clearInterval(timer)
        }
    },300)
})
};


function handleMutation(mutation) {
    if(mutation[0].target.classList.contains('ativo')) {
        observer.disconnect();
        animaNum();
    }
}


const observeVible = document.querySelector('.numeros');
const observer = new MutationObserver(handleMutation);
observer.observe(observeVible, {attributes:true})







