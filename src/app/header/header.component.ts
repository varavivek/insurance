import { Component, OnInit } from '@angular/core';
import { PageLink } from '../page-link';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  majHeading:string;
  logo:string;
  linkText = "Login";
  links:PageLink[]; 
  constructor() { 
    this.majHeading = "Life Insurance";
    this.logo ="assets/images/logo.png"
    this.links = [{linkText:"Home",linkStyle:"fa", linkRef:"home"},
    {linkText:"Products",linkStyle:"fa", linkRef:"products"},
    {linkText:"History",linkStyle:"fa", linkRef:"history"},
    {linkText:"Contact Us",linkStyle:"fa", linkRef:"contactUs"},];
  }

  ngOnInit() {
  }

}
