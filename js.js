console.log('Alive...');


const navbar = document.querySelector('.navbar')
const open_menu = document.querySelector('.hamburger');
const hamburger = document.querySelector('.ham_line');
const close = document.querySelector('.close_line');
const close_menu = document.querySelector('.close_line');
const menu = document.querySelector('.nav_link_container');
const site = document.querySelector('.site_container');
const profile_pic = document.querySelector('.profile_picture_container').getBoundingClientRect();
const cta = document.querySelector(".cta_mouse");

let current_position = window.pageYOffset;
window.onscroll = function () {
    let new_position = window.pageYOffset;

    if (current_position > new_position) {
        navbar.style.top = '0';
    }
    else {
        navbar.style.top = '-30%';
    }
    current_position = new_position;

    if (current_position > 100) {
        navbar.style.boxShadow = '1px 1px 20px var(--navy_shadow)';
    } else {
        navbar.style.boxShadow = 'none';
    };

    console.log(current_position)
    console.log(new_position)

    if (current_position < 360) {
        cta.style.opacity = '1'
    }
    else {
        cta.style.opacity = '0'
    }

    if (current_position < 100) {
        navbar.style.backgroundColor = '#2054A3';
    }
    else {
        navbar.style.backgroundColor = '#112240';
    }


};

function toggle_menu () {

    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        close.style.display = 'none';
        hamburger.style.display = 'block';
        
        console.log('Close');
    } else {
        menu.style.display = 'block';
        close.style.display = 'block';
        hamburger.style.display = 'none';
        console.log('Open');
        
    }
}

site.addEventListener('click', function site_clicked () {
    if (menu.style.display == 'block') {
        menu.style.display = 'none';
        close.style.display = 'none';
        hamburger.style.display = 'block';
        console.log('Site Clicked');
    }
});
