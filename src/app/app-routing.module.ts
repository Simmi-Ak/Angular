import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'About',component:FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash:false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
