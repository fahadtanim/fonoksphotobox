import { Component, OnInit, OnDestroy } from '@angular/core';
import {SliderService} from '../../../services/SliderService';
@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.css']
})
export class HomeSliderComponent implements OnInit, OnDestroy {
  public slider: SliderService;
  constructor() {
   }

  ngOnInit() {
    this.slider = new SliderService('slider', 'slider-container', 'dot', 'active', 3);
    this.slider.animate();
  }

  ngOnDestroy() {
    this.slider.stopAnimate();
  }
}
