import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TestFormComponent } from './test-form/test-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './materail-module/materail-module.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NamesService } from './shared/names.service';
import { ChildFormComponent } from './child-form/child-form.component';
import { RateFormComponent } from './rate-form/rate-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TestFormComponent,
    ChildFormComponent,
    RateFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [NamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
