import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

/* Angular material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// Componentes
import { ProfileComponent } from './pages/profile/profile.component';
import { AppComponent } from './app.component';
import { SidenavComponent } from './pages/shared/sidenav/sidenav.component';
import { HomeComponent } from './pages/home/home.component';
import { BuildingParametersComponent } from './pages/building-parameters/building-parameters.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OnlynumberDirective } from './directive/onlynumber-directive';
import { DataComponent } from './pages/data/data.component';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { NumericDecimalDirective } from './directive/numeric-decimal-directive';

@NgModule({
  declarations: [
    OnlynumberDirective,
    NumericDecimalDirective,
    AppComponent,
    HomeComponent,
    SidenavComponent,
    ProfileComponent,
    BuildingParametersComponent,
    DataComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    NgJsonEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
