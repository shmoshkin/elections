import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './components/display/display.component';
import {AdministratorComponent} from './components/display/administrator/administrator.component';

const routes: Routes = [
    { path: '', redirectTo: 'selectors', pathMatch: 'full' },
    { path: 'selectors', component: DisplayComponent },
    { path: 'admin', component: AdministratorComponent }
  ];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}