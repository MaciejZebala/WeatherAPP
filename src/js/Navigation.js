export default class Navigation {
  constructor() {
    this.sevenDays = document.querySelector('.nav__item--seven-days');
    this.today = document.querySelector('.nav__item--today');
    this.ring = document.querySelector('.nav__ring');
  }

  changeRing() {
    this.sevenDays.addEventListener('click', () => {
      this.ring.style.transition = 'transform 0.3s ease-in-out';
      this.ring.style.transform = 'translateX(180px)';
    });
    this.today.addEventListener('click', () => {
      this.ring.style.transition = 'transform 0.3s ease-in-out';
      this.ring.style.transform = 'translateX(0px)';
    });
  }
}
