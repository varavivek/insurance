import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-quote',
  templateUrl: './show-quote.component.html',
  styleUrls: ['./show-quote.component.css']
})
export class ShowQuoteComponent implements OnInit {

  isDisabled = true;
  age = 18;
  suggestedPolicy:string;
  constructor() { }

  ngOnInit() {
  }

  showPolicy(){
    if(this.age>18){
      this.suggestedPolicy="Jeevan Anand";
    } else {
      this.suggestedPolicy="Jeevan Child";
    }
    console.log("Display Policies");
  }

  changeStatus(){
    this.isDisabled= false;
  }
}
