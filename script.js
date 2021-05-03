const search = document.querySelector('input')
const button = document.getElementById('btn')

button.addEventListener('click', () => {
    search.classList.toggle('active')
})