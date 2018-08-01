import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, Form, FormGroup, FormsModule } from '@angular/forms';
// import { NoopAnimationsModule } from '@angular/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { image } from '@angular/image';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

import { ElModule } from 'element-angular';
import { ModelstorageComponent } from './modelstorage/modelstorage.component';
import { NewModelComponent } from './newmodel/model.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroTourAppComponent } from './hero-tour-app/hero-tour-app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '../../node_modules/@angular/compiler/src/core';
export const ROUTER: Routes = [
  { path: '', component: MainComponent },
  // { path: '', redirectTo: '/herotour', pathMatch: 'full' },
  { path: 'herotour', component: HeroTourAppComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NewModelComponent,
    ModelstorageComponent,
    HeroesComponent,
    HeroTourAppComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ElModule,
    RouterModule.forRoot(ROUTER)
  ],
  providers: [],
  bootstrap: [AppComponent]
  // schemas:['CUSTOM_ELEMENTS_SCHEMA'
})
export class AppModule { }
