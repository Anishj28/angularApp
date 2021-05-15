import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikesComponent } from './bikes/bikes.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { TelevisionsComponent } from './televisions/televisions.component';

const routes: Routes = [
{path:'homePath', component:HomeComponent},
{path: 'registerPath', component:RegisterComponent},
{path:'loginPath',component:LoginComponent},
{path:'contactusPath',component:ContactusComponent},
{path:'productsPath',component:ProductsComponent,children:[
  {path:'mobiles',component:MobilesComponent},
  {path:'bikes',component:BikesComponent},
  {path:'televisions',component:TelevisionsComponent},
  {path:'',redirectTo:'/productsPath/bikes',pathMatch:'full'}
]},
{path:'',redirectTo:'/loginPath',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
