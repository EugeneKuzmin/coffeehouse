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

const scrlControls = document.querySelectorAll('.scroll-control > div')
let currControl = 0;

scrlControls[0].classList.add('active-control-after-dowload')


function updControls() {
    scrlControls.forEach(cntrl => 
        {
            cntrl.classList.remove('active-control')
            cntrl.classList.remove('active-control-after-dowload')
            cntrl.innerHTML = ''

    })
    scrlControls[currControl].classList.add('active-control')
    const progress = document.createElement('div')
    progress.classList.add('active-control-progress')
    scrlControls[currControl].appendChild(progress)
}

carousel.addEventListener('mouseenter', () => {
    const progress = document.querySelector('.active-control-progress')
    progress.classList.add('paused')
});

carousel.addEventListener('mouseleave', () => {
    const progress = document.querySelector('.active-control-progress')
    progress.classList.remove('paused')
});


const moveLeft = () => {
    if(carousel.scrollLeft !== 0) {
        carousel.scrollLeft -= picWidth;
        currControl -= 1;
    }else {
        carousel.scrollLeft = carousel.scrollWidth - picWidth
        currControl = 2;
    }
    updControls()
}

arrowLeft.addEventListener('click',moveLeft)

const moveRight = () => {
    if(currControl < 2) {
        carousel.scrollLeft += picWidth
        currControl += 1;
    } else {
        carousel.scrollLeft = 0
        currControl = 0
    }
    updControls()
   
}

arrowRight.addEventListener('click',moveRight)

