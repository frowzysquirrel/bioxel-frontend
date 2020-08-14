import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { ProductsComponent } from './products/products.component';
import { BrandsComponent } from './brands/brands.component';
import { TechServiceComponent } from './tech-service/tech-service.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'empresa', component: CompanyComponent },
  { path: 'productos', component: ProductsComponent },
  { path: 'marcas', component: BrandsComponent },
  { path: 'servicio-tecnico', component: TechServiceComponent },
  { path: 'noticias', component: NewsComponent },
  { path: 'noticias/:uid', component: NewsComponent },
  { path: 'contacto', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
