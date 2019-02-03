import { Component, OnInit, OnDestroy } from '@angular/core';
import {CarosellService} from '../../../services/CarosellService';
@Component({
  selector: 'app-home-testimonial',
  templateUrl: './home-testimonial.component.html',
  styleUrls: ['./home-testimonial.component.css']
})
export class HomeTestimonialComponent implements OnInit,OnDestroy {
  public testimonialSlider: CarosellService;
  constructor() { }

  ngOnInit() {
    this.testimonialSlider = new CarosellService( 'testimonial-slider',
                                                  'testimonial-slider-container',
                                                  'testimonial-dot',
                                                  'testimonial-active',
                                                  2);
    this.testimonialSlider.animate();
  }
  ngOnDestroy(){
    this.testimonialSlider.stopAnimate();
  }
}

