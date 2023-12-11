const dataNavToggle = document.querySelectorAll('[data-nav-toggle]')
const navigation = document.querySelector('.primary-navigation')
const menuItems = document.querySelectorAll('.link')
const menuLnk = document.querySelector('[data-menu-link]')
const headerBlock = document.querySelector('[data-header]')

function setNavToggle(flag) {
    navigation.setAttribute("data-visible", flag);
    dataNavToggle.forEach(l=>{
        l.setAttribute('aria-expanded',flag)
    })
    if(flag){
        navigation.appendChild(menuLnk)
    }else{
        headerBlock.appendChild(menuLnk)
    }

}

dataNavToggle.forEach(btn => {
    btn.addEventListener('click',() => {
        let fl = btn.getAttribute('aria-expanded') === 'true'?false:true;
        setNavToggle(fl)
    })
})

menuItems.forEach(m=>m.addEventListener('click',()=>{
    setNavToggle(false)
}))

// carousel

const carousel = document.getElementById('carousel')
const picClass = document.querySelectorAll('.card__img')[0]
const picWidth = picClass.clientWidth

const arrowLeft = document.querySelector('#arrowLeft')
const arrowRight = document.querySelector('#arrowRight')

const scrollWidth = carousel.scrollWidth - carousel.clientWidth

const moveLeft = () => {
    if(carousel.scrollLeft !== 0) {
        carousel.scrollLeft -= picWidth
    }else {
        carousel.scrollLeft = carousel.scrollWidth - picWidth
    }
}

arrowLeft.addEventListener('click',moveLeft)

const moveRight = () => {
    if(carousel.scrollWidth - picWidth !== carousel.scrollLeft) {
        carousel.scrollLeft += picWidth
    } else {
        carousel.scrollLeft = 0
    }
}

arrowRight.addEventListener('click',moveRight)

