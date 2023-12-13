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

const carousel = document.getElementById('carousel_image')
const carouselText = document.getElementById('carousel_text')
const picClass = document.querySelectorAll('.card__img')[0]
const picWidth = picClass.clientWidth

const textContainer = document.querySelectorAll('.card__description')[0]
const textContainerWidth = textContainer.clientWidth

const arrowLeft = document.querySelector('#arrowLeft')
const arrowRight = document.querySelector('#arrowRight')

const scrollWidth = carousel.scrollWidth - carousel.clientWidth
const scrollTextWidth = carouselText.scrollWidth - carouselText.clientWidth

const scrlControls = document.querySelectorAll('.scroll-control > div')
let currControl = 0;

let timeOutInstance = null
let timeOutPause = false
let timerStart = new Date();
let timerEnd = 0;
let loopDuration = 7000;

scrlControls[0].classList.add('active-control-after-dowload')

function updControls() {
    scrlControls.forEach(cntrl => 
        {
            cntrl.classList.remove('active-control')
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
    window.clearTimeout(timeOutInstance);
    timerEnd = new Date()
    timeOutPause = true;
    
});

carousel.addEventListener('mouseleave', () => {
    const progress = document.querySelector('.active-control-progress')
    progress.classList.remove('paused')
    timeOutPause = false
    loopDuration = loopDuration - (timerEnd.getTime() - timerStart.getTime())
    timerStart = new Date()
    startLoop()
});


const moveLeft = () => {
    if(carousel.scrollLeft !== 0) {
        carousel.scrollLeft -= picWidth;
        carouselText.scrollLeft -= textContainerWidth
        currControl -= 1;
    }else {
        carousel.scrollLeft = carousel.scrollWidth - picWidth
        carouselText.scrollLeft = carouselText.scrollWidth - textContainerWidth
        currControl = 2;
    }
    if(loopDuration !== 7000){
        loopDuration = 7000
    }

    updControls()
}

arrowLeft.addEventListener('click',()=>{
    window.clearTimeout(timeOutInstance);
    moveLeft()
    startLoop()
}
)

const moveRight = () => {
    
    if(currControl < 2) {
        carousel.scrollLeft += picWidth
        carouselText.scrollLeft += textContainerWidth
        currControl += 1;
    } else {
        carousel.scrollLeft = 0
        carouselText.scrollLeft = 0
        currControl = 0
    }
    if(loopDuration !== 7000){
        loopDuration = 7000
    }
    updControls()
   
}

arrowRight.addEventListener('click',()=>{
    window.clearTimeout(timeOutInstance);
    moveRight()
    startLoop()
})


function startLoop() {

    timeOutInstance = setTimeout(function() {

        if(!timeOutPause){

            timerStart = new Date()
            
            moveRight();
            startLoop();
        }
    }, loopDuration);
}

startLoop();



