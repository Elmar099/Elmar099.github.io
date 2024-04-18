let drop = document.querySelector('#menu-icon')
let nav = document.querySelector('.navbar')
let bar = document.querySelector('.header')
const body = document.body;
let lastScroll = 0;

document.addEventListener('DOMContentLoaded', function () {
    const interBubble = document.querySelector('.interactive');
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
        curX += (tgX - curX) / 90;
        curY += (tgY - curY) / 90;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(move);
    }

    window.addEventListener('mousemove', function (event) {
        tgX = event.clientX;
        tgY = event.clientY;
    });

    move();
});

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
    distance: '100px',
    duration: 5000,
    reset: false
})

scrl.reveal('.home-text',{delay: 200, origin: 'top', reset: true})
scrl.reveal('.about, .education, .projects, .skills, .contact',{delay: 100, origin: 'top'})