import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css']
})
export class AuthModalComponent {
  users: any;
  user: any;
  walletAddress: any;

  User: User = {
    username: 'Unnamed',
    email: 'unnamed@gmail.com',
    profilePicture: '',
    walletAddress: '',
    joinedAt: new Date()
  }

  // Icons
  faXmark = faXmark;

  constructor(private userService: UserService, private router: Router) { }

  connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      this.walletAddress = await window.ethereum.request({ method: "eth_requestAccounts" });
      this.authenticate();
    } else {
      console.log("please install metamask wallet extension in your browser")
    }
  }

  authenticate() {
    var userFound: Boolean = false;
    this.userService.getUsers().subscribe((response) => {
      this.users = response;
      for (let user of this.users) {
        if (user.walletAddress == this.walletAddress) {
          sessionStorage.setItem('user', JSON.stringify(user));
          userFound = true;
        }
        if (userFound) {
          break;
        }
      }
      if (!userFound) {
        this.User.walletAddress = this.walletAddress[0];
        this.persistUser();
      }
    })
  }

  persistUser() {
    this.userService.persistUser(this.User).subscribe(() => {
      this.getUserByWalletAddress();
      this.resetUser();
    });
  }

  getUserByWalletAddress() {
    this.userService.getUserByWalletAddress(this.User.walletAddress).subscribe(response => {
      this.user = response;
      sessionStorage.setItem('user', JSON.stringify(this.user));
      this.router.navigate(['/account', this.User.id]);
      this.resetUser();
    });
  }

  resetUser() {
    this.User = {
      username: 'Unnamed',
      email: 'unnamed@gmail.com',
      profilePicture: '',
      walletAddress: '',
      joinedAt: new Date()
    }
  }
}
