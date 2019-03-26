import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SliderService } from 'src/services/SliderService';
@Component({
  selector: 'app-photobox-category',
  templateUrl: './photobox-category.component.html',
  styleUrls: ['./photobox-category.component.css']
})
export class PhotoboxCategoryComponent implements OnInit, OnDestroy {
  public category: string;
  public slider: any;
  constructor( private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('photoboxCategory');
    });

    this.slider = new SliderService('slider', 'slider-container', 'dot', 'active', 3);
    this.slider.animate();
    console.log(this.route);
    console.log(this.category);
  }

  ngOnDestroy() {
    this.slider.stopAnimate();
  }
}
