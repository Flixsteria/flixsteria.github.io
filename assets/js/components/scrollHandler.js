
class ScrollHandler {
  constructor() {
    this.aboutSection = document.querySelector('.about');
    this.init();
  }

  checkScroll() {
    const triggerBottom = window.innerHeight * 0.8;
    const aboutTop = this.aboutSection.getBoundingClientRect().top;

    if (aboutTop < triggerBottom) {
      this.aboutSection.classList.add('visible');
    }
  }

  init() {
    window.addEventListener('scroll', () => this.checkScroll());
    this.checkScroll();
  }
}
