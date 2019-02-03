import { Component, OnInit, OnDestroy } from '@angular/core';
import { Particles } from '../../services/Particles';
@Component({
  selector: 'app-pricing-plan',
  templateUrl: './pricing-plan.component.html',
  styleUrls: ['./pricing-plan.component.css']
})
export class PricingPlanComponent implements OnInit, OnDestroy {
  public particleStyle: object = {};
  public particleParams: object = {};
  public particleHeight: string;
  public pricingPlanParticles: Particles;
  constructor() {

  }

  ngOnInit() {
   /* this.pricingPlanParticles = new Particles();
    this.pricingPlanParticles.particle.particles.number.value = 75;
    this.particleParams = this.pricingPlanParticles.particle;
    const height = document.getElementById('section-title-pricing-plan').clientHeight;
    this.particleStyle = {
      'width': '100%',
      'height': height + 'px',
    };
    document.getElementById('particle-container').style.marginTop = '-' + height + 'px';*/
  }
  ngOnDestroy() {
    // console.log('pricing-plan destroyed');

  }
}
