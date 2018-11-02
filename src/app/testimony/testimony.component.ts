import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.css']
})
export class TestimonyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getRetailCustomerFeedback():string{
    return "Retail Feedback";
  }

  getCorporateCustomerFeedback():string{
    return "Corporate Feedback";
  }
}
