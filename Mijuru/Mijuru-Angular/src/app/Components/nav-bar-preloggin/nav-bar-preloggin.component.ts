import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar-preloggin',
  templateUrl: './nav-bar-preloggin.component.html',
  styleUrls: ['./nav-bar-preloggin.component.css']
})
export class NavBarPrelogginComponent implements OnInit {

  constructor(public router: Router) {

  }

  ngOnInit(): void {
  }

}
