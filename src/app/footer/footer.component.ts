import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {PageLink} from "../page-link";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  // encapsulation: ViewEncapsulation.Native
})
export class FooterComponent implements OnInit {

  footerHeading:string;
  links:PageLink[] = [{linkText:"Facebook",linkStyle:"fa fa-facebook"},
  {linkText:"Twitter",linkStyle:"fa fa-twitter"},
  {linkText:"Instagram",linkStyle:"fa fa-instagram"},
  {linkText:"pintrest",linkStyle:"fa fa-pinterest"},];

  
  constructor() { 
    this.footerHeading="Follow Us :";
  }

  ngOnInit() {
  }

}
