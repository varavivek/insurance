import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import {Policy} from "../policy";
import { TestimonyComponent } from '../testimony/testimony.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit,AfterViewInit {
  
  @ViewChild(TestimonyComponent) compRef : TestimonyComponent;
  contentTitle:string;
  feedback1:string;
  feedback2:string;
  policies:Policy[] = [{policyName:"Jeevan Anand" , policyDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {policyName:"Jeevan Bharosa" , policyDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {policyName:"Jeevan Samosa" , policyDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {policyName:"Jeevan Khush reh" , policyDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},];

  constructor(private ref:ChangeDetectorRef) {
    this.contentTitle="Popular Policies";
   }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    
    this.feedback1 = this.compRef.getRetailCustomerFeedback();
    this.feedback2 = this.compRef.getCorporateCustomerFeedback();
    this.ref.detectChanges();
  }
}
