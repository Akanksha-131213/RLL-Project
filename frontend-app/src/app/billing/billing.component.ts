import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  billingForm!: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private _http:HttpClient, private router:Router) { }
  checkout(){
    
  }

  ngOnInit(): void {
    this.billingForm = this.formBuilder.group({
      firstname:['', [Validators.required]],
      address1:['', [Validators.required]],
      address2:['', [Validators.required]],
      city:['', [Validators.required]],
      state:['', [Validators.required]],
      zip:['', [Validators.required]],
      
    })
  }

  

}