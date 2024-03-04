import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-campus-navbar',
  templateUrl: './campus-navbar.component.html',
  styleUrls: ['./campus-navbar.component.css']
})
export class CampusNavbarComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
