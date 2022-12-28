import { Location } from '@angular/common';
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
  searchbar: any;
  href: any;

  // Icons
  faShoppingCart = faShoppingCart;
  faCircleUser = faCircleUser;
  faUser = faUser;
  faPencil = faPencil;
  faGear = faGear;
  faHeart = faHeart;
  faSearch = faSearch;

  constructor(private location: Location, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
    this.href = this.location.path();
    this.searchbar = document.getElementById('searchbar');
    this.navbar = document.getElementById('navbar');
    if (this.href == "") {
      this.navbar.classList.remove('shadow-md');
      this.searchbar.classList.remove('bg-gray-100');
      this.searchbar.classList.add('bg-white');
    }
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
      this.navbar.classList.add('sticky', 'top-0', 'bg-white', 'shadow-md');
      if (this.href == "") {
        this.searchbar.classList.remove('bg-white');
        this.searchbar.classList.add('bg-gray-100');
      }
    } else {
      this.navbar.classList.remove('sticky', 'top-0', 'bg-white');
      if (this.href == "") {
        this.searchbar.classList.remove('bg-gray-100');
        this.searchbar.classList.add('bg-white');
      }
    }
  }

}
