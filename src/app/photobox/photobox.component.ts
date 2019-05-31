import { Component, OnInit } from '@angular/core';
import {SliderService} from '../../services/SliderService';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-photobox',
  templateUrl: './photobox.component.html',
  styleUrls: ['./photobox.component.css']
})
export class PhotoboxComponent implements OnInit {
  public slider: SliderService;
  // MatPaginator Inputs
  length = 100;
  pageSize = 7;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;


  constructor() { }
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
  ngOnInit() {
    this.slider = new SliderService('slider', 'slider-container', 'dot', 'active', 3);
    this.slider.animate();
    var x = document.getElementsByClassName('mat-paginator-page-size');
    console.log(x);
    console.log(x.length);
  }

  ngOnDestroy() {
    this.slider.stopAnimate();
  }

}
