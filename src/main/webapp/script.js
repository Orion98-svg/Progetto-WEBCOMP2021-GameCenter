const menu = document.querySelector('#menu_button')
const menulinks = document.querySelector('.nav_menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active')
    menulinks.classList.toggle('active')
})
