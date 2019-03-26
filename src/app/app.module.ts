import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { TesterComponent } from './tester/tester.component';
import { MaterialModule } from './material/material.module';
import { TesterchildComponent } from './tester/testerchild/testerchild.component';
import { TesterlistComponent } from './tester/testerlist/testerlist.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryComponent } from './categories/category/category.component';
import { CategoryService } from '../services/category.service';

import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { HomeAboutComponent } from './home/home-about/home-about.component';
import { HomeContactComponent } from './home/home-contact/home-contact.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { PhotoboxComponent } from './photobox/photobox.component';
import { PhotoboxCategoryComponent } from './photobox/photobox-category/photobox-category.component';
import { HomeSliderComponent } from './home/home-slider/home-slider.component';
import { HomeTestimonialComponent } from './home/home-testimonial/home-testimonial.component';
import { PricingPlanComponent } from './pricing-plan/pricing-plan.component';
import { HomeServicesComponent } from './home/home-services/home-services.component';
import { AboutUsComponent } from './about-us/about-us.component';

import { ParticlesModule } from 'angular-particle';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { Services2Component } from './services2/services2.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationBarComponent,
    TesterComponent,
    TesterchildComponent,
    TesterlistComponent,
    CategoriesComponent,
    CategoryComponent,
    HomeAboutComponent,
    HomeContactComponent,
    FooterComponent,
    ProductsComponent,
    PhotoboxComponent,
    PhotoboxCategoryComponent,
    HomeSliderComponent,
    HomeTestimonialComponent,
    PricingPlanComponent,
    HomeServicesComponent,
    AboutUsComponent,
    ContactUsComponent,
    ServicesComponent,
    Services2Component,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ParticlesModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [
    CategoryService,
    {
      provide: ErrorStateMatcher,
      useClass: ShowOnDirtyErrorStateMatcher
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
