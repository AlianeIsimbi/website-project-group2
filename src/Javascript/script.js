
const navigationLinks = [
    { text: 'About', href: '#about' },
    { text: 'Services', href: '#services' },
    { text: 'References', href: '#references' },
    { text: 'Contact', href: '#contact' }
];

function createNavigationLinks(links) {
    return links.map(link => 
        `<a href="${link.href}" class="hover:text-green-600 transition-colors duration-200 scroll-smooth">${link.text}</a>`
    ).join('');
}

function populateNavigationMenus() {
    const desktopNav = document.getElementById('desktop-nav');
    const mobileNav = document.getElementById('mobile-nav');
    
    const navLinksHTML = createNavigationLinks(navigationLinks);
    
    if (desktopNav) {
        desktopNav.innerHTML = navLinksHTML;
    }
    
    if (mobileNav) {
        mobileNav.innerHTML = navLinksHTML;
    }
}

populateNavigationMenus();

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');

let isOpen = false;

if (hamburger && mobileMenu && line1 && line2 && line3) {
    hamburger.addEventListener('click', () => {
        if (!isOpen) {
            mobileMenu.classList.remove('hidden');
            line1.style.transform = 'rotate(45deg) translate(4px, 4px)';
            line2.style.opacity = '0';
            line3.style.transform = 'rotate(-45deg) translate(4px, -4px)';
            isOpen = true;
        } else {
            mobileMenu.classList.add('hidden');
            line1.style.transform = 'rotate(0) translate(0px, 0px)';
            line2.style.opacity = '1';
            line3.style.transform = 'rotate(0) translate(0px, 0px)';
            isOpen = false;
        }
    });
}