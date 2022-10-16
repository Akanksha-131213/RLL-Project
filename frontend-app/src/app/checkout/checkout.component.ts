
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {


  checkoutForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private _http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.checkoutForm = this.formBuilder.group({
     
      cardname:['', [Validators.required]],
      cardnumber:['', [Validators.required]],
      expmonth:['', [Validators.required]],
      expyear:['', [Validators.required]],
      cvv:['', [Validators.required]],
    })
  }

  checkOut(){
      alert("Payment done Successfully");
      
     
   
  }

}