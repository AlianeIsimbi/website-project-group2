const hamburger = document.getElementById('hamburger')
        const mobileMenu = document.getElementById('mobileMenu')
        const line1 = document.getElementById('burger')
        const line2 = document.getElementById('con')
        
        let isOpen = false;

        hamburger.addEventListener('click', () =>{
            if(isOpen){
                mobileMenu.classList.add('hidden')
                line1.classList.remove('hidden')
                line2.classList.add('hidden')
                isOpen = false;
            }else{
                mobileMenu.classList.remove('hidden')
                line1.classList.add('hidden')
                line2.classList.remove('hidden')
                isOpen = true;
            }
        })
