import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { AuthService } from './Services/auth.service';
import { ListingService } from './Services/listing.service';
import { RoyalComponent } from './components/royal/royal.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './Services/token-interceptor.service';

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
    RoyalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AuthService, ListingService, AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
