import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcategoryComponent } from './components/addcategory/addcategory.component';
import { AddcompanyComponent } from './components/addcompany/addcompany.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { AdminComponent } from './components/admin/admin.component';
import { CategoryComponent } from './components/category/category.component';
import { CompanyComponent } from './components/company/company.component';
import { LoginComponent } from './components/login/login.component';
//import { AuthService } from './_services/auth.service';
// import { ProductpageComponent } from './components/productpage/productpage.component';


const routes: Routes = [

 // { path: '', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent,children:[
    {path:'admin',component:AdminComponent}
  ]},
  {path:'admin',component:AdminComponent,children:[
    {path:'company',component:CompanyComponent},
    {path:'addcompany',component:AddcompanyComponent},
    {path:'category',component:CategoryComponent},
   {path:'addcategory',component:AddcategoryComponent}, 
   {path:'addproduct',component:AddproductComponent},
  
  ]
     },
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
