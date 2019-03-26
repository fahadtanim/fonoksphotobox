import { animate } from '@angular/animations';

export class SliderService {
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

  /*############# Calling to slide  ################   */

  showSlides(n: number) {
    // console.log('showSlide(' + n + ') called');

    let i: number;
    let slide: HTMLElement;
    let dot: HTMLElement;
    const slides = document.getElementsByClassName(this.sliderClassName);
    const slideLen = slides.length;
    const dots = document.getElementsByClassName(this.dotClassName);
    if (n >= slideLen) { this.slideIndex = 0; }
    if (n < 0) { this.slideIndex = slideLen; }

    // console.log('currentSlide(' + n + ') slideIndex: ' + this.slideIndex);
    if (n === 0) {
      slide = <HTMLElement>slides[0];
      slide.style.opacity = '1';
      slide.style.marginLeft = '0px';
      slide.style.transform = 'translateX(0px)';
      for (i = slideLen - 1; i > n; i--) {
          slide = <HTMLElement>slides[i];
          slide.style.marginLeft = '0px';
          slide.style.opacity = '0.5';
          slide.style.transform = 'translateX(0px)';
          // console.log('currentSlide(' + n + ') first loop called ');
      }
    }

    if ( n > 0 && n < slideLen ) {
      for (i = n - 1; i >= 0; i--) {
        slide = <HTMLElement>slides[i];
        slide.style.opacity = '0.5';

        const tempWidth = slide.clientWidth;
        const mrLeft = tempWidth * 0.2 * (-1);
        slide.style.transform = 'translateX(' + mrLeft + 'px)';
        // console.log(typeof(slide.style.marginLeft) );
        // console.log(slide.style.marginLeft);

        // if (slide.style.marginLeft && slide.style.marginLeft !== '0px' ) {
        //   console.log(slide.style.marginLeft);
        //   slide.style.marginLeft = (-1 * ( tempWidth + (tempWidth * 0.2) ) ) + 'px';
        // } else {
        //   slide.style.marginLeft = (-1 * mrLeft ) + 'px';
        // }

        // console.log(slide.style.marginLeft + 10);
      }
      slide = <HTMLElement>slides[n];
      // console.log(slide);
      const slideWidth = -1 * (slide.clientWidth + 1);
      const wid = slideWidth + 'px';
      // console.log(wid);
      slide.style.marginLeft = wid;
      slide.style.opacity = '1';
      // console.log(slide.style.marginLeft);
     }
/*
    for (i = 1; i <= n; i++) {
        slide = <HTMLElement>slides[i];
        const slideWidth = -1 * (slide.clientWidth + 1);
        slide.style.marginLeft = slideWidth + 'px';
        console.log('currentSlide(' + n + ') second loop called ');
    }
*/
    for (i = 0; i < dots.length; i++) {
        dot = <HTMLElement>dots[i];
        dot.className = dot.className.replace((' ' + this.dotActiveClass), '');
        // console.log('currentSlide(' + n + ') third loop called ');
    }
    // slide = <HTMLElement>slides[this.slideIndex];
    // slide.style.marginLeft = '0px';
    dot = <HTMLElement>dots[this.slideIndex];
    dot.className += (' ' + this.dotActiveClass);
  }

/*############# Calling to set slider container width  ################   */
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

  /*#############  ################   */
  plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }

  /*############# Calling to getting the current slide  ################   */

  public currentSlide(n) {
    // console.log('currentSlide(' + n + ') called');
    clearInterval(this.slideInterval);
    this.x = n;
    // console.log('currentSlide x: ' + this.x);
    const len = document.getElementsByClassName(this.dotClassName).length;
    if (n > len) { n = 0; }
    this.showSlides(this.slideIndex = n);
    this.animate();
  }

  /*############# Calling to go to next slide  ################   */

  public increment() {
    // console.log('increment() called');
    const len = document.getElementsByClassName(this.dotClassName).length;
    if (this.x < len) {
        // console.log('increment() if block currentslide(' + this.x + ')');
        this.currentSlide(this.x);
        this.x++;
        // console.log('increment() if block x: ' + this.x);
    } else {
        // console.log('increment() else block currentslide(0)');
        this.currentSlide(0);
        this.x = 0;
        // console.log('increment() if block x: ' + this.x);
    }
  }

  /*############# Calling to go to previous slide  ################   */
  public decrement() {
    const len = document.getElementsByClassName(this.dotClassName).length;
    if (this.x > 0) {
      this.x--;
      this.currentSlide(this.x);
    } else {
      this.x = len - 1;
      this.currentSlide(this.x);
    }
  }

  /*############# Calling animate function to start sliding!! Here t=> time in seconds  ################   */
  stopAnimate(){
    clearInterval(this.slideInterval);
  }
  animate() {
    this.slideInterval = setInterval(this.increment.bind(this), this.slideIntervalTime * 1000);
  }
}
