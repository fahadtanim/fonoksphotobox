import { Component, OnInit } from '@angular/core';
import { Particles } from '../../services/Particles';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  public particleStyle: object = {};
  public particleParams: object = {};
  public particleHeight: string;
  public aboutParticles: Particles;
  constructor() {
  }

  ngOnInit() {/*
    this.aboutParticles = new Particles();
    this.aboutParticles.particle.particles.number.value = 75;
    this.particleParams = this.aboutParticles.particle;
    const height = document.getElementById('section-title-pricing-plan').clientHeight;
    this.particleStyle = {
      'width': '100%',
      'height': height + 'px',
    };
   // document.getElementById('particle-container').style.marginTop = '-' + height + 'px';*/
  }

}
