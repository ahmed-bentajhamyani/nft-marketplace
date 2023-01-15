import { Component, HostListener } from '@angular/core';
import { faShoppingCart, faCircleUser, faUser, faPencil, faGear, faHeart, faSearch, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/services/cart.service';
import { CategoryService } from 'src/app/services/category.service';
import { ImageService } from 'src/app/services/image.service';
import { NftService } from 'src/app/services/nft.service';

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

  // Cart
  carts: any;
  nfts: { [key: string]: any } = { "": "" };
  totalPrice: number = 0;
  totalItems: number = 0;

  retrieveResponse: any;
  base64Data: any;
  retrievedImages: { [key: string]: any } = { "": "" };

  // Icons
  faShoppingCart = faShoppingCart;
  faCircleUser = faCircleUser;
  faUser = faUser;
  faPencil = faPencil;
  faGear = faGear;
  faHeart = faHeart;
  faSearch = faSearch;
  faLogout = faRightFromBracket;

  constructor(private categoryService: CategoryService, private nftService: NftService, private cartService: CartService, private imageService: ImageService) { }

  ngOnInit(): void {
    this.getCategories();
    this.navbar = document.getElementById('navbar');
    if (sessionStorage.getItem('user') != null) {
      this.user = sessionStorage.getItem('user');
      this.user = JSON.parse(this.user);
      this.isActive = true;
      this.getUserCarts();
    }
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(reponse => {
      this.categories = reponse;
    })
  }

  logout() {
    sessionStorage.removeItem('user');
    this.isActive = false;
  }

  getUserCarts() {
    this.cartService.getUserCarts(this.user.walletAddress).subscribe(response => {
      this.carts = response;
      for (let cart of this.carts) {
        this.totalPrice += cart.itemPrice;
        this.totalItems++;
        this.getNftInCart(cart);
      }
    })
  }

  getNftInCart(cart: any) {
    this.nftService.getNftByName(cart.nftName).subscribe(response => {
      this.nfts[cart.id] = response;
      this.getImage(this.nfts[cart.id]);
    })
  }

  getImage(nft: any) {
    this.imageService.getImage(nft.imageName).subscribe(response => {
      this.retrieveResponse = response;
      this.base64Data = this.retrieveResponse.picByte;
      this.retrievedImages[nft.name] = 'data:image/jpeg;base64,' + this.base64Data;
    });
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
