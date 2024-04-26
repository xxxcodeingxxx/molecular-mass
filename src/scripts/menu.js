const openMenu = document.getElementById('openMenu')
const closeMenu = document.getElementById('closeMenu')
const mobileMenu = document.getElementById('mobileMenu')

openMenu.addEventListener('click', () => {
    openMenu.classList.add('hidden')
    closeMenu.classList.remove('hidden')
    mobileMenu.classList.add('openMenu')
    mobileMenu.classList.remove('closeMenu', 'hidden', 'opacity-0')
})

closeMenu.addEventListener('click', () => {
    closeMenu.classList.add('hidden')
    openMenu.classList.remove('hidden')
    mobileMenu.classList.remove('openMenu')
    mobileMenu.classList.add('closeMenu', 'hidden')
})
