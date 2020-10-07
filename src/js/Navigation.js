export default class Navigation {
    constructor(){
        this.tomorrow = document.querySelector('.nav__item--tomorrow')
        this.sevenDays = document.querySelector('.nav__item--seven-days')
        this.today = document.querySelector('.nav__item--today')
        this.ring = document.querySelector('.nav__ring')
    }

    changeRing(){
        this.tomorrow.addEventListener('click', ()=>{
            this.ring.style.transition = "transform 0.3s ease-in-out"
            this.ring.style.transform = "translateX(109px)"
            console.log('sasas')
        })
        this.sevenDays.addEventListener('click', ()=>{
            this.ring.style.transition = "transform 0.3s ease-in-out"
            this.ring.style.transform = "translateX(240px)"
        })
        this.today.addEventListener('click', ()=>{
            this.ring.style.transition = "transform 0.3s ease-in-out"
            this.ring.style.transform = "translateX(0px)"
        })
    }
}