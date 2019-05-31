import { Component, OnInit } from '@angular/core';
import {SliderService} from '../../../services/SliderService';
import {PageEvent} from '@angular/material/paginator';
@Component({
  selector: 'app-photobox-category',
  templateUrl: './photobox-category.component.html',
  styleUrls: ['./photobox-category.component.css']
})
export class PhotoboxCategoryComponent implements OnInit {

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
