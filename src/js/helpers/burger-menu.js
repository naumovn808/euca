export function navMenu() {
    const menuBtn = document.querySelector('.nav__btn');
    const navMenu = document.querySelector('.nav-menu');

    const body = document.querySelector('body');

    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', (e) => {

            e.preventDefault();
            body.classList.toggle('open');
            menuBtn.classList.toggle('open');
            if (navMenu) navMenu.classList.toggle('open');
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 999) {
                menuBtn.classList.remove('open');
                body.classList.remove('open');
                if (navMenu) navMenu.classList.remove('open');
            }
        });
    }
}
