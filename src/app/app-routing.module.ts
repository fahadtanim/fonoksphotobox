import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {TesterComponent} from './tester/tester.component';
import { CategoriesComponent } from './categories/categories.component';
import { PhotoboxComponent } from './photobox/photobox.component';
import { PhotoboxCategoryComponent } from './photobox/photobox-category/photobox-category.component';
import { PricingPlanComponent } from './pricing-plan/pricing-plan.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { Services2Component } from './services2/services2.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'test', component: TesterComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'photobox', component: PhotoboxComponent },
    { path: 'photobox/:photoboxCategory', component: PhotoboxCategoryComponent },
    { path: 'pricingplan', component: PricingPlanComponent },
    { path: 'aboutus', component: AboutUsComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'services2', component: Services2Component },
    { path: 'contactus', component: ContactUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
