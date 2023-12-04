const dataNavToggle = document.querySelectorAll('[data-nav-toggle]')

dataNavToggle.forEach(btn => {
    btn.addEventListener('click',() => {
        let fl = 'true'
        if(btn.getAttribute('aria-expanded') === 'true'){
            fl = 'false'
        }
        dataNavToggle.forEach(l=>{
            l.setAttribute('aria-expanded',fl)
        })
    })
})

// carousel

const carousel = document.getElementById('carousel')
const picClass = document.querySelectorAll('.card__img')[0]
const picWidth = picClass.clientWidth

const arrowLeft = document.querySelector('#arrowLeft')
const arrowRight = document.querySelector('#arrowRight')

let currScrollPosition = 0

const scrollWidth = carousel.scrollWidth - carousel.clientWidth

const moveLeft = () => {
    if(!arrowLeft.disabled) {
        carousel.scrollLeft -= picWidth
    }
}

arrowLeft.addEventListener('click',moveLeft)


const moveRight = () => {
    if(!arrowRight.disabled) {
        carousel.scrollLeft += picWidth
    }
}

arrowRight.addEventListener('click',moveRight)