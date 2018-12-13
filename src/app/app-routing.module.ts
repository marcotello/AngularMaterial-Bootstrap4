import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {GridComponent} from './grid/grid.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent

    },
    {
        path: 'grid',
        component: GridComponent
    },
    {
        path: '**',
        redirectTo: '/'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }