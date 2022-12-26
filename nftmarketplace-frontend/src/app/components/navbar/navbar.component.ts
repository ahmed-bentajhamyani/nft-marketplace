import { Component, HostListener } from '@angular/core';
// import logo from '../../../assets/';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  faShoppingCart = faShoppingCart;
  faUser = faUser;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: any) {
    console.log("Window : ", window.pageYOffset)
    let element = document.getElementById('navbar');
    if (element != null) {
      if (window.pageYOffset) {
        element.classList.add('sticky', 'top-0', 'bg-white', 'shadow-md');
      } else {
        element.classList.remove('sticky', 'top-0', 'bg-white', 'shadow-md');
      }
    }
  }

}
