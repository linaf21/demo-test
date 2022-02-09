import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { CustomerListComponent } from './component/customer-list/customer-list.component';
import { FormsModule } from '@angular/forms';
import { CustomerSaveComponent } from './component/customer-save/customer-save.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerSaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
