import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { HttpClientModule} from '@angular/common/http'

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';

import { ProductpageService } from './components/services/productpage.service';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { CompanyComponent } from './components/company/company.component';
import { AddcompanyComponent } from './components/addcompany/addcompany.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { CategoryComponent } from './components/category/category.component';
import { AddcategoryComponent } from './components/addcategory/addcategory.component';
import { AuthService } from './_services/auth.service';
import { LoginserviceService } from './_services/loginservice.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    AddproductComponent,
    AdminComponent,
    LoginComponent,
    CompanyComponent,
    AddcompanyComponent,
    AddproductComponent,
    CategoryComponent,
    AddcategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthService,LoginserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
