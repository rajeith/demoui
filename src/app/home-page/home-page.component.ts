import { Component, OnInit ,Renderer2, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  isNavbarCollapsed = true;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {
  }
  // mobileMenuSidebarOpen(event: any, className: string) {
  //   const hasClass = event.target.classList.contains(className);
  //   console.log('name',event);
  //   debugger;
  //   if (hasClass) {
  //     this.renderer.removeClass(this.document.body, className);
  //     console.log('start');
      
  //   } else {
  //     console.log('end');
      
  //     this.renderer.addClass(this.document.body, className);
  //   }
  // }
  toggleMenu(type) {
    // var x = document.getElementById("menuItems");
    console.log("stART",type);
    
    if (type === 'menuItems') {
      type.className += " responsive";
    } else {
      type.className = "topnav menu";
    }
  }
}

