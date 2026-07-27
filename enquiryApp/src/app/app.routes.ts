import { Routes } from '@angular/router';
import { Services } from './pages/services/services';
import { Enquries } from './pages/enquries/enquries';
import { NewEnquiry } from './pages/new-enquiry/new-enquiry';
import { Login } from './pages/login/login';


export const routes: Routes = [
    {
        path:'',
        redirectTo: 'service',
        pathMatch: 'full'
    },
    {
        path:'service',
        component: Services
    },
    {
        path:'enquries',
        component: Enquries
    },
    {
        path:'new-enquiry',
        component: NewEnquiry
    },
    {
        path:'login',
        component: Login
    }
];
