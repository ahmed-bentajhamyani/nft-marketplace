import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NFT Store';
  href: any;

  constructor(private location: Location) { }

  ngOnInit() {
    this.href = this.location.path();
    let body = document.getElementById('body');
    if (body != null) {
      if (this.href == "") {
        body.classList.add('all');
      } else {
        body.classList.remove('all');
      }
    }
    console.log(this.location.path());
  }
}
