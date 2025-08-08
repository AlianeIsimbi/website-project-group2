const hamburger = document.getElementById('hamburger')
        const mobileMenu = document.getElementById('mobileMenu')
        const line1 = document.getElementById('line1')
        const line2 = document.getElementById('line2')
        const line3 = document.getElementById('line3')
        
        let isOpen = false;

        hamburger.addEventListener('click', () =>{
            if(!isOpen){
                mobileMenu.classList.remove('hidden')
                line1.style.transform = 'rotate(45deg) translate(4px, 4px)';
                line2.style.opacity = '0';
                line3.style.transform = 'rotate(-45deg) translate(4px, -4px)';

                isOpen = true;
            }else{
                mobileMenu.classList.add('hidden')
                line1.style.transform = 'rotate(0) translate(0px, 0px)';
                line2.style.opacity = '1';
                line3.style.transform = 'rotate(0) translate(0px, 0px)';

                isOpen = false;
            }
        })
