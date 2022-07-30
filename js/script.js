let drop = document.querySelector('#menu-icon')
let nav = document.querySelector('.navbar')
let bar = document.querySelector('.header')
const body = document.body;
let lastScroll = 0;

drop.onclick = () => {
    drop.classList.toggle('bx-x')
    nav.classList.toggle('active')
};

window.onscroll = () => {
    drop.classList.remove('bx-x')
    nav.classList.remove('active')
};
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset

    if (currentScroll <= 0) {
        body.classList.remove('scroll-up')
    }
    
    if (currentScroll > lastScroll && !body.classList.contains('scroll-down')) {
        body.classList.remove('scroll-up')
        body.classList.add('scroll-down')
    }

    if (currentScroll < lastScroll && body.classList.contains('scroll-down')) {
        body.classList.remove('scroll-down')
        body.classList.add('scroll-up')
    }


    lastScroll = currentScroll;

})
const scrl = ScrollReveal ({
    distance: '60px',
    duration: 1500,
    reset: false
})

scrl.reveal('.home-text',{delay: 100, origin: 'top', reset: true})
scrl.reveal('.about, .education, .projects, .skills, .contact',{delay: 100, origin: 'top'})