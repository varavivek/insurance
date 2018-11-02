import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InsuranceAdvisor } from './insurance-advisor';
import { PolicyDetail } from './policy-detail';

@Injectable({
  providedIn: 'root'
})
export class InsuranceAPIService {

  baseUrl = "http://localhost:3000/";
  adivseURL = `${this.baseUrl}advisors`;
  policyURL = `${this.baseUrl}lifeInsurance`;

  header = new HttpHeaders().set('content-type','application/json');
  constructor(private httpClient: HttpClient) {  }

  findAllAdvisors(): Observable<InsuranceAdvisor[]> {
    
    return this.httpClient.get<InsuranceAdvisor[]>(this.adivseURL);
  }

  findPolicyDetails(): Observable<PolicyDetail[]> {
    
    return this.httpClient.get<PolicyDetail[]>(this.policyURL);
  }

  addPolicy(policy : PolicyDetail): Observable<PolicyDetail>{
    return this.httpClient.post<PolicyDetail>(this.policyURL,policy,{headers:this.header});
  }

  updatePolicy(policy : PolicyDetail): Observable<PolicyDetail>{
    const url = `${this.policyURL}/${policy.id}`;
    return this.httpClient.put<PolicyDetail>(url,policy,{headers:this.header});
  }

  deletePolicy(policy : PolicyDetail): Observable<PolicyDetail>{
    const url = `${this.policyURL}/${policy.id}`;
    return this.httpClient.delete<PolicyDetail>(url,{headers:this.header});
  }
}
