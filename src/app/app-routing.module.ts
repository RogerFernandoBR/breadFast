import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutePages } from './enums/_enums';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: RoutePages.Root, component: HomeComponent },
  { path: RoutePages.Home, component: HomeComponent },
  { path: RoutePages.About, component: AboutComponent },
  { path: RoutePages.Producs, component: ProductsComponent },
  { path: RoutePages.Contact, component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
