import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us.component';
import { BlogComponent } from './blog/blog.component';
import { DemoComponent } from './demo/demo.component';
import { FuctionsComponent } from './fuctions/fuctions.component';

const routes: Routes = [
  {
    path: 'aboutus',
    component: AboutUsComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'function',
    component: FuctionsComponent
  },
  {
    path: 'demo',
    component: DemoComponent
  },
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }
