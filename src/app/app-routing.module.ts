import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommingSoonComponent } from './components/comming-soon/comming-soon.component';
import { CompareComponent } from './components/compare/compare.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { Error404Component } from './components/error404/error404.component';
import { FaqComponent } from './components/faq/faq.component';
import { HomeComponent } from './components/home/home.component';
import { ListingDetailsComponent } from './components/listing-details/listing-details.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileListingsComponent } from './components/profile-listings/profile-listings.component';
import { ProfileSavedListingsComponent } from './components/profile-saved-listings/profile-saved-listings.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { SubmitListingComponent } from './components/submit-listing/submit-listing.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profilelisting', component: ProfileListingsComponent },
  { path: 'profilesavedlisting', component: ProfileSavedListingsComponent },
  { path: 'submitlisting', component: SubmitListingComponent },
  { path: 'compare', component: CompareComponent },
  { path: 'listingdetails', component: ListingDetailsComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'commingsoon', component: CommingSoonComponent },
  { path: 'faq', component: FaqComponent },
  { path: '404', component: Error404Component },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `home-component`
  { path: '**', component: Error404Component },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
