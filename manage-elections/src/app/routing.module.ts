import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './components/display/display.component';

const routes: Routes = [
    { path: '', redirectTo: 'selectors', pathMatch: 'full' },
    { path: 'selectors', component: DisplayComponent }
  ];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}