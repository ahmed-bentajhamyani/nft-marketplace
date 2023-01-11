import { Component, HostListener } from '@angular/core';
import { faShoppingCart, faCircleUser, faUser, faPencil, faGear, faHeart, faSearch, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  categories: any;
  navbar: any;
  user: any;
  isActive: boolean = false;

  // Icons
  faShoppingCart = faShoppingCart;
  faCircleUser = faCircleUser;
  faUser = faUser;
  faPencil = faPencil;
  faGear = faGear;
  faHeart = faHeart;
  faSearch = faSearch;
  faLogout = faRightFromBracket;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
    this.navbar = document.getElementById('navbar');
    if (sessionStorage.getItem('user') != null) {
      this.user = sessionStorage.getItem('user');
      this.user = JSON.parse(this.user);
      this.isActive = true;
    }
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(reponse => {
      this.categories = reponse;
    })
  }

  logout() {
    sessionStorage.removeItem('hash');
    sessionStorage.removeItem('user');
    this.isActive = false;
  }

  // Sticky navbar
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: any) {
    if (window.pageYOffset) {
      this.navbar.classList.add('sticky', 'top-0', 'bg-white', 'border');
    } else {
      this.navbar.classList.remove('sticky', 'top-0', 'bg-white', 'border');
    }
  }

}
