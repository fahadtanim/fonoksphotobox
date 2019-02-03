import { animate } from '@angular/animations';




export class CarosellService {
  private slideIndex: number;
  private x: number;
  private sliderClassName: string;
  private sliderContainerClassName: string;
  private dotClassName: string;
  private dotActiveClass: string;
  private slideInterval: any;
  private slideIntervalTime: number;
  constructor(sliderClass: string, sliderContainerClassName: string, dotclass: string, dotActiveClass: string, intervalTime: number) {
    this.slideIndex               = 0;
    this.x                        = 0;
    this.sliderClassName          = sliderClass;
    this.sliderContainerClassName = sliderContainerClassName;
    this.dotClassName             = dotclass;
    this. dotActiveClass          = dotActiveClass;
    this.slideIntervalTime        = intervalTime;
    this.setSliderWidth();
   }

   setSliderWidth() {
    let i: number;
    let slide: HTMLElement;
    let width: number;
    const slides = document.getElementsByClassName(this.sliderClassName);
    const slideLen = document.getElementsByClassName(this.sliderClassName).length;
    width = 0;
    for (i = slideLen - 1; i >= this.slideIndex; i--) {
        slide = <HTMLElement>slides[i];
        width += slide.clientWidth;
    }
    document.getElementById(this.sliderContainerClassName).style.width = width + 'px';
  }

  plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }
  showSlides(n: number) {
    let i: number;
    let slide: HTMLElement;
    const slides = document.getElementsByClassName(this.sliderClassName);
    const slideLen = slides.length;
    const dots = document.getElementsByClassName(this.dotClassName);
    if (n >= slideLen) {
        this.slideIndex = 0;
    }
    if (n < 0) { this.slideIndex = slideLen; }

    for (i = slideLen - 1; i >= this.slideIndex; i--) {
      slide = <HTMLElement>slides[i];
      slide.style.marginLeft = '0%';
    }

    for (i = 0; i < this.slideIndex; i++) {
      slide = <HTMLElement>slides[i];
      slide.style.marginLeft = '-100%';
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace((' ' + this.dotActiveClass), '');
    }
    slide = <HTMLElement> slides[this.slideIndex];
    slide.style.marginLeft = '0%';
    dots[this.slideIndex].className += (' ' + this.dotActiveClass);
  }
  currentSlide(n: number) {
    const len = document.getElementsByClassName(this.dotClassName).length;
    if (n >= len) { n = 0; }

    this.showSlides(this.slideIndex = n);
  }

  increment() {
    const len = document.getElementsByClassName(this.dotClassName).length;
    if (this.x < len) {
        this.currentSlide(this.x);
        this.x++;
    } else {
        this.currentSlide(0);
        this.x = 0;
    }
  }

  stopAnimate() {
    clearInterval(this.slideInterval);
  }
  animate() {
    this.slideInterval = setInterval(this.increment.bind(this), this.slideIntervalTime * 1000);
  }
}
