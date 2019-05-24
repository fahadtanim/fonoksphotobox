import { Component, OnInit } from '@angular/core';
import { Particles } from '../../services/Particles';
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  public particleStyle: object = {};
  public particleParams: object = {};
  contactParticle: Particles;
  constructor() { }

  ngOnInit() {
    this.contactParticle = new Particles();
    this.contactParticle.particle.particles.number.value = 120;
    this.particleParams = this.contactParticle.particle;
    this.particleStyle = {
      'width': '100%',
      'height': '100vh',
    };
  }

}
