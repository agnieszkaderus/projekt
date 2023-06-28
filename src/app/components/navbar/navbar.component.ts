import {Component, HostListener, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbg:any;
  isSearchExpanded: boolean = false;

  constructor(public authService: AuthService, public router: Router) {
  }

  ngOnInit(): void {
  }

  signOut() {
    this.authService.logout().subscribe((result: any) => {
      this.router.navigate(['/']);
      return result;
    });
  }

  @HostListener('document:scroll') scrollover(){
    console.log(document.body.scrollTop,'scrolllength#');

    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.navbg = {
        'background-color': 'white',
        'box-shadow': '0px 5px 15px 0px rgba(0, 0, 0, 0.25)'
      };
    } else {
      this.navbg = {
        'background-color': 'transparent',
        'box-shadow': 'none'
      };
    }
  }

  expandSearch() {
    this.isSearchExpanded = !this.isSearchExpanded;
  }

}
