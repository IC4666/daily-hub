import { Routes } from '@angular/router';

export const routes: Routes = [
{
    path: '',
    pathMatch: 'full',
    // redirectTo: 'home',
    loadComponent : () => {
        return import('./pages/home/home.component').then(m => m.HomeComponent);
    },
    //   data: { animation: 'HomePage' }
},
{
    path: 'about',
    loadComponent: () =>{
        return import ('./pages/about/about.component').then(m => m.AboutComponent)
    },
    //   data: { animation: 'AboutPage' }
},
{
    path: 'contact',
    loadComponent:()=>{
        return import('./pages/contact/contact.component').then(m => m.ContactComponent)
    },
    //   data: { animation: 'ContactPage' }
}


];
