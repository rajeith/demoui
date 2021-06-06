import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: '/home-page/demo', pathMatch: 'full' },
      {
        path: 'home-page',
        loadChildren: () =>
          import('./home-page/home-page.module').then(
            (m) => m.HomePageModule
          )
      },
      {
        path: 'about-us',
        loadChildren: () =>
          import('./about-us/about-us.module').then(
            (m) => m.AboutUsModule
          )
      },
]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
