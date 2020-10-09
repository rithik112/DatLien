import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { SubmitListingComponent } from './components/submit-listing/submit-listing.component';
import { Error404Component } from './components/error404/error404.component';
import { CompareComponent } from './components/compare/compare.component';
import { CommingSoonComponent } from './components/comming-soon/comming-soon.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileListingsComponent } from './components/profile-listings/profile-listings.component';
import { ProfileSavedListingsComponent } from './components/profile-saved-listings/profile-saved-listings.component';
import { ListingDetailsComponent } from './components/listing-details/listing-details.component';
import { FaqComponent } from './components/faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    SubmitListingComponent,
    Error404Component,
    CompareComponent,
    CommingSoonComponent,
    ContactUsComponent,
    ProfileComponent,
    ProfileListingsComponent,
    ProfileSavedListingsComponent,
    ListingDetailsComponent,
    FaqComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
