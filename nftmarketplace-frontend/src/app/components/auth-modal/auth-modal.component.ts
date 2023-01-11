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
  hash: any;

  User: User = {
    username: 'Unnamed',
    email: 'unnamed@gmail.com',
    profilePicture: '',
    hash: '',
    joinedAt: new Date()
  }

  // Icons
  faXmark = faXmark;

  constructor(private userService: UserService, private router: Router) { }

  connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      this.hash = await window.ethereum.request({ method: "eth_requestAccounts" });
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
        if (user.hash == this.hash) {
          sessionStorage.setItem('user', JSON.stringify(user));
          userFound = true;
        }
        if (userFound) {
          break;
        }
      }
      if (!userFound) {
        this.User.hash = this.hash[0];
        this.persistUser();
      }
    })
  }

  persistUser() {
    this.userService.persistUser(this.User).subscribe(() => {
      this.getUserByHash();
      this.resetUser();
    });
  }

  getUserByHash() {
    this.userService.getUserByHash(this.User.hash).subscribe(response => {
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
      hash: '',
      joinedAt: new Date()
    }
  }
}
