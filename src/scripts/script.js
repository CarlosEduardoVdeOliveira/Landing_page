const menuMobile = document.querySelector('.button--menu')
const addActive = (el)=>{
    el.classList.toggle('active')
}
const toggleMenu = () =>{
    const links = document.querySelectorAll('.menu--link')
    const navMenu = document.querySelector('nav')

    links.forEach(link => {
        link.addEventListener('click', ()=>{
            return ('active') ? navMenu.classList.remove('active'):navMenu.classList.add('active')
        })
    });
    addActive(navMenu)
    
}
menuMobile.addEventListener('click', toggleMenu)

