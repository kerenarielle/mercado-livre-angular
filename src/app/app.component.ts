import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule , FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public headerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.initForm(fb);
  }

  ngOnInit(){}

  initForm(fb:FormBuilder) {
    this.headerForm = fb.group({
      produto: ['', Validators.required]
    })
  }

  send(value: any) {
    this.router.navigate(['home'], {
      queryParams: {
        id: value.produto
      }
    })
  }

}
