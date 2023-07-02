const menuItemsEl = document.getElementById('menu-items')
const menuOpenEl = document.getElementById('menu-open')
const menuCloseEl = document.getElementById('menu-close')

function toggleClass() {
    menuItemsEl.classList.toggle('hidden')
    menuOpenEl.classList.toggle('hidden')
    menuCloseEl.classList.toggle('hidden')
}

menuOpenEl.addEventListener('click', toggleClass)

menuCloseEl.addEventListener('click', toggleClass)