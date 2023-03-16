import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  title = 'login';
  loginForm!: FormGroup;
  punonjesit: any[] = [];
  nukEkziston = false;

  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private firebase: FirebaseService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
    this.firebase.getPunonjes().subscribe((punonjes: any) => {
      this.punonjesit = punonjes;
    });
  }
  onSubmit() {
    if (this.loginForm.valid) {
      this.punonjesit.map((punonjesi: any) => {
        console.log(punonjesi);
        if (
          punonjesi.username === this.loginForm.value.username &&
          punonjesi.password === this.loginForm.value.password
        ) {
          localStorage.setItem('login', punonjesi);
          if (punonjesi.role === 'admin') {
            this.authService.isLoggedIn = true;
            this.authService.isAdmin = true;
            this.router.navigate(['admin']);
          } else {
            this.authService.isLoggedIn = true;
            this.authService.isAdmin = false;
            this.router.navigate(['employeer']);
          }
        } else {
          this.nukEkziston = true
        }
      });
    } else {
      alert('plotsoni kredencjalet');
    }
  }
}
