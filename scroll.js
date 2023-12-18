
export default function animaScroll() {  
    const target = document.querySelectorAll('[data-scroll]');
    const windowMetade = window.innerHeight * 0.8;
            target.forEach((section) => {
               const sectionTop = section.getBoundingClientRect(). top - windowMetade;
               if(sectionTop < 0) {
                  section.classList.add('ativo')
               }
            })
         }
       
      
    window.addEventListener('scroll', animaScroll);





























































// export default function animarScroll() {   
//     const jsScroll = document.querySelectorAll('[data-scroll]');
//     const windowMetade = window.innerHeight * 0.7;
    
//     function animaScroll() {
//         jsScroll.forEach((section) => {
//             const sectionTop = section.getBoundingClientRect().top;
//             const visiBle = (sectionTop - windowMetade) < 0;
//             if(visiBle) {
//                 section.classList.add('ativo');
//             }else if(section.classList.contains('ativo')) {
//                 section.classList.remove('ativo')
//             }
               
            
//         })
//     }
//     window.addEventListener('scroll', animaScroll);
//     }



   