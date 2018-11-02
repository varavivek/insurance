import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentAdderService } from '../component-adder.service';
import { ShowLocationComponent } from '../show-location/show-location.component';

@Component({
  selector: 'app-search-branch',
  templateUrl: './search-branch.component.html',
  styleUrls: ['./search-branch.component.css']
})
export class SearchBranchComponent implements OnInit {
  cityName: string;
  branches: string[];

  @ViewChild('locationInfo', { read: ViewContainerRef }) viewRef: ViewContainerRef
    constructor(private service:ComponentAdderService) { }

  ngOnInit() {
  }

  showBranches(branchList: string[]) {
    this.branches = branchList;
  }

  addComponent(){
    this.service.setViewReference(this.viewRef);
    const compRef = this.service.addComponent(ShowLocationComponent);
    const locationComp = (<ShowLocationComponent>compRef.instance);
    locationComp.selectedLocation.subscribe(value =>{
      if(value != ''){
        this.cityName = value;      
        this.removeComponent();
      }
      
    });
    
  }

  removeComponent(){
    this.viewRef.detach();
  }
}
