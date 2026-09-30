import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { IndiaComponent } from './pages/india/india.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AsiaComponent } from './pages/asia/asia.component';
import { IslandsLuxuryComponent } from './pages/islands-luxury/islands-luxury.component';
import { MiddleEastComponent } from './pages/middle-east/middle-east.component';
import { DestinationDetailsComponent } from './pages/destination-details/destination-details.component';
import { BeachToursComponent } from './pages/beach-tours/beach-tours.component';
import { MountainToursComponent } from './pages/mountain-tours/mountain-tours.component';
import { AdventureToursComponent } from './pages/adventure-tours/adventure-tours.component';
import { CulturalToursComponent } from './pages/cultural-tours/cultural-tours.component';
import { LuxuryToursComponent } from './pages/luxury-tours/luxury-tours.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'india', component: IndiaComponent },
    { path: 'asia', component: AsiaComponent },
    { path: 'luxury', component: IslandsLuxuryComponent },
    { path: 'middle-east', component: MiddleEastComponent },
    { path: 'contact', component: ContactComponent },


    { path: 'beach-tours', component: BeachToursComponent },
    { path: 'mountain-tours', component: MountainToursComponent },
    { path: 'adventure-tours', component: AdventureToursComponent },
    { path: 'cultural-tours', component: CulturalToursComponent },
    { path: 'luxury-tours', component: LuxuryToursComponent },
    { path: 'destination/:id', component: DestinationDetailsComponent },

];
