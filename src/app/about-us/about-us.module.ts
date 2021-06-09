import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import { BlogComponent } from './blog/blog.component';
import { FuctionsComponent } from './fuctions/fuctions.component';
import { DemoComponent } from './demo/demo.component';


@NgModule({
  declarations: [AboutUsComponent, BlogComponent, FuctionsComponent, DemoComponent],
  imports: [
    CommonModule,
    AboutUsRoutingModule
  ]
})
export class AboutUsModule { }
