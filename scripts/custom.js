let navLinks = document.querySelectorAll('header .nav-link')


function activeLink(link) {
    console.log(link);
    navLinks.forEach(link => {
        link.classList.remove("active")
        link.nextElementSibling.classList.add("d-none")
    })
    link.classList.toggle("active")
    link.nextElementSibling.classList.toggle("d-none")
}
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        activeLink(link)
    })
})