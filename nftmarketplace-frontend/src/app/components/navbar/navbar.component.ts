import { Component, HostListener } from '@angular/core';
import { faShoppingCart, faCircleUser, faUser, faPencil, faGear, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  categories: any;
  navbar: any;

  // Icons
  faShoppingCart = faShoppingCart;
  faCircleUser = faCircleUser;
  faUser = faUser;
  faPencil = faPencil;
  faGear = faGear;
  faHeart = faHeart;
  faSearch = faSearch;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
    this.navbar = document.getElementById('navbar');
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(reponse => {
      this.categories = reponse;
    })
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
