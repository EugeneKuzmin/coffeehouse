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