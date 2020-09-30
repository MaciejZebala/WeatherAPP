export default class Slider {
    constructor(){
        this.nextBtn = document.querySelector('.weather-hour__btn--next');
        this.backBtn = document.querySelector('.weather-hour__btn--back');
        this.sliderSection = [...document.querySelectorAll('.hour-list__view')];
        this.counter = 0
    }

    moveToNext(){
        this.counter++;
        this.sliderSection.forEach(e => {
            e.style.transition = "transform 0.5s ease-in-out"
            e.style.transform = `translateX(${-this.sliderSection[0].clientWidth * this.counter}px)`
        })
        if(this.counter===this.sliderSection.length-1){
            this.nextBtn.style.display = "none";
        }
        if(this.counter > 0 ){
            this.backBtn.style.display = "flex"
        }
    }

    moveToBack(){
        this.counter--;
        this.sliderSection.forEach(e => {
            e.style.transition = "transform 0.5s ease-in-out"
            e.style.transform = `translateX(${-this.sliderSection[0].clientWidth * this.counter}px)`
        })
        if (this.counter === 0) {
            this.backBtn.style.display = "none"
        }
        if(this.counter < this.sliderSection.length -1 ){
            this.nextBtn.style.display = "flex";
        }
    }

    render(){
        this.nextBtn.addEventListener('click', this.moveToNext.bind(this));
        if (this.counter === 0) {
            this.backBtn.style.display = "none"
        }
        this.backBtn.addEventListener('click', this.moveToBack.bind(this));
    }
}