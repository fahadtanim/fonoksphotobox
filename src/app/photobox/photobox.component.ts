import { Component, OnInit } from '@angular/core';
import {SliderService} from '../../services/SliderService';

@Component({
  selector: 'app-photobox',
  templateUrl: './photobox.component.html',
  styleUrls: ['./photobox.component.css']
})
export class PhotoboxComponent implements OnInit {
  public slider: SliderService;
  constructor() { }

  ngOnInit() {
    this.slider = new SliderService('slider', 'slider-container', 'dot', 'active', 3);
    this.slider.animate();
  }

  ngOnDestroy() {
    this.slider.stopAnimate();
  }

}
