import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-show-branch',
  templateUrl: './show-branch.component.html',
  styleUrls: ['./show-branch.component.css']
})
export class ShowBranchComponent implements OnInit {

  @Input() cityName: string;
  @Output() branches: EventEmitter<string[]> = new EventEmitter<string[]>();
  constructor() {
    console.log("Constructor " + this.cityName);
   }

  ngOnInit() {
    console.log("Init "+this.cityName);
  }

  sendBranches() {
    if (this.cityName === 'Hyd') {
      this.branches.emit(['Gachibowli', 'Madhapur', 'Kondapur', 'HiTech City']);
    } else {
      this.branches.emit(['Maddilapalem', 'NAD X Roads', 'MVP Colony', 'Seetamadhara']);
    }

  }

}
