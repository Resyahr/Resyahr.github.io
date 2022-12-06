console.log('Alive...')
const hamburger = document.querySelector('.ham_line');
const close = document.querySelector('.close_line');
const nav_links= document.querySelector('.nav_link_container');
const site = document.querySelector('.site_container');
const nav_link = document.querySelector('.nav_link');
const nav_link1 = document.querySelector('.nav_link');
const nav_link2 = document.querySelector('.nav_link');


hamburger.addEventListener('click', nav_bar());
hamburger.addEventListener('click', close_menu());

function nav_bar() {
    
    if (nav_links.style.display === 'block') {
        nav_links.style.display = 'none';
        close.style.display = 'none';
        hamburger.style.display = 'block';
    } else {
        nav_links.style.display = 'block';
        close.style.display = 'block';
        hamburger.style.display = 'none';
    }
};

function close_menu() {
    if (nav_links.style.display === 'block') {
        nav_links.style.display = 'none';
        hamburger.style.display = 'block';
        close.style.display = 'none';
    } else {
        nav_links.style.display = 'block';
        close.style.display = 'block';
        hamburger.style.display = 'none';
    }
};

site.addEventListener('click', function clicked_outside() {
    if (nav_links.style.display === 'block') {
        nav_links.style.display = 'none';
        close.style.display = 'none';
        hamburger.style.display = 'block';
    }
});
nav_link.addEventListener('click', function clicked_on_nav_link() {
    if (nav_links.style.display === 'block') {
        nav_links.style.display = 'none';
        close.style.display = 'none';
        hamburger.style.display = 'block';        
    }
});