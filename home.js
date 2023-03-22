const toggle = document.querySelector('.toggle')
const menu = document.querySelector('.menu')
// **************************
// Responsive Navigation Menu

// toggle function
const toggleMenu = () => {
  if (menu.classList.contains('active')) {
    menu.classList.remove('active')
  } else {
    menu.classList.add('active')
  }
}

toggle.addEventListener('click', toggleMenu, false)
