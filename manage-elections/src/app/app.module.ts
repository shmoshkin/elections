// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

// Components
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DisplayComponent } from './components/display/display.component';

// Services
import {CrudService} from './services/crud-service/crud.service';

// Directives


// Other
import { MaterialModule } from './material.module';
import { AppRoutingModule }     from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
