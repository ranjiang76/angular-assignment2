import { LoginService } from './../../login.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //  constructor(private loginService: LoginService) {}
   constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
  }

  navigate() {

    this.router.navigate(['loginform']);

  }

}
