

 
 export default function slideAnimal() {   
    const image_width = 500;
    const delay = 3000;
    const $prev = document.querySelector('.prev');
    const $next = document.querySelector('.next');
    const $imageContainer = document.querySelector('.image-container');
    const $imagens = document.querySelectorAll('.img-slid');
    
    let currentImg = 1;
    let timeout;
    
    function updateImg() {
        if(currentImg > $imagens.length) {
            currentImg = 1;
        }else if (currentImg < 1) {
            currentImg = $imagens.length
        }
        $imageContainer.style.transform = `translateX(-${(currentImg - 1) * image_width}px)`;
    
    
    timeout = setTimeout(
        () => {
            currentImg++;
            updateImg();
        },
        delay,
    );
    }
    
    $prev.addEventListener('click',() => {
            clearInterval(timeout);
            currentImg--;
            updateImg()
        },
    );
    
    $next.addEventListener('click',() => {
            clearInterval(timeout);
            currentImg++;
            updateImg()
        },
    )
    
    }
    
    
    
    
    
     
     
    
    
    
    
    