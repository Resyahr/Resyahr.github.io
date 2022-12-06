console.log('Alive...')

const open_menu = document.querySelector('.hamburger');
const hamburger = document.querySelector('.ham_line');
const close = document.querySelector('.close_line');
const close_menu = document.querySelector('.close_line');
const menu = document.querySelector('.nav_link_container');
const site = document.querySelector('.site_container');


function toggle_menu () {

    if (menu.style.display == 'block') {
        menu.style.display = 'none';
        close.style.display = 'none';
        hamburger.style.display = 'block';
        console.log('Open');
    } else {
        menu.style.display = 'block';
        close.style.display = 'block';
        hamburger.style.display = 'none';
        console.log('Close');
    }
}

/* site.addEventListener('click', function site_clicked () {
    if (menu.style.display == 'block') {
        menu.style.display = 'none';
        close.style.display = 'none';
        hamburger.style.display = 'block';
        console.log('Site Clicked');
    }
});
 */