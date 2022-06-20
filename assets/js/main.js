/* ------ show menu ------ */

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


/* --- menu show -- */
/* validate if constants exists */

if(navToggle){
    navToggle.addEventListener('click', ()=> {
        navMenu.classList.add('show-menu')
    })
}

/* ---- menu hidden --- */
/* validate if constants exists */
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}


/* ----- remove menu mobile --- */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(e => e.addEventListener('click', linkAction))


