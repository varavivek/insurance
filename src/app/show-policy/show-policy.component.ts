import { Component, OnInit, ViewChild } from '@angular/core';
import { InsuranceAPIService } from '../insurance-api.service';
import { PolicyDetail } from '../policy-detail';

@Component({
  selector: 'app-show-policy',
  templateUrl: './show-policy.component.html',
  styleUrls: ['./show-policy.component.css']
})
export class ShowPolicyComponent implements OnInit {

  policyList: PolicyDetail[] = [];
  searchString: string;
  policyData: PolicyDetail = {
    id: 0,
    policyHolderName: '',
    policyAmount: 0,
    maturityDate: new Date()
  }
  buttonText = 'Add';
  pos:number;
  showForm=false;

  @ViewChild('f') form: any;
  constructor(private service: InsuranceAPIService) { }

  ngOnInit() {
    this.service.findPolicyDetails().subscribe(data => {
      this.policyList = data;
    }, err => {
      console.log(err);
    });
  }

  submit() {
    console.log(this.policyData);
    if(this.buttonText === 'Add'){
      this.service.addPolicy(this.policyData).subscribe(resp => {
        this.policyList.push(resp);
        this.form.reset();
      }, err => {
        console.log(err);
      });
    } else if(this.buttonText === 'Update'){
      this.service.updatePolicy(this.policyData).subscribe(resp => {
        this.policyList[this.pos]=resp;
        this.buttonText = 'Add';
        this.form.reset();
      }, err => {
        console.log(err);
      });
    }
    
  }

  showFormFunction(){
    this.showForm = !this.showForm;
  }

  update(policy: PolicyDetail) {
    console.log("Update Called");
    this.pos = this.policyList.indexOf(policy);
    this.policyData=policy;
    this.buttonText = "Update";
    if(!this.showForm)
      this.showFormFunction();
    
  }

  delete(policy: PolicyDetail) {
    console.log("Delete  Called");
    this.service.deletePolicy(policy).subscribe(resp => {
      this.policyList.splice(this.policyList.indexOf(policy),1);
    }, err => {
      console.log(err);
    });
  }
}
