import { Component, OnInit, OnDestroy } from '@angular/core';
import {CarosellService} from '../../services/CarosellService';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {
  public carosell: CarosellService;
  constructor() { }

  ngOnInit() {
    this.carosell = new CarosellService('carosell', 'carosell-container', 'carosell-dot', 'carosell-dot-active', 3);
    this.carosell.animate();
  }

  ngOnDestroy() {
    this.carosell.stopAnimate();
  }

}
