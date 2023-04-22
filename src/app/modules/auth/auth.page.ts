import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class AuthPage implements OnInit {

  form!: FormGroup;
  dni!: FormControl;

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.validationForm();
    this.createForm();
  }


  validationForm() {
    this.dni = new FormControl(null, [Validators.required, Validators.minLength(8)])
  }

  createForm() {
    this.form = this.fb.group({
      dni: this.dni
    })
  }

  onSubmit() {
    if(this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.router.navigate(['/account/home']);
  }


}
