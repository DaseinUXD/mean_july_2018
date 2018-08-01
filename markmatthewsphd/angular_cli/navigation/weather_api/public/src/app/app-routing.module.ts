import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: 'product', component: ProductsComponent, children: [
      // nested route
      // { path: 'edit/:id', component: ProductsEditComponent },
    // ]},
  // { path: 'product/new', component: ProductsNewComponent },
  { path: '', redirectTo: 'app' }, // redirects empty url to app home
  { path: '**', redirectTo: 'app' }, // redirects any mistyped url to the app home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
