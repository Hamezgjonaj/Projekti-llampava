import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/firebase.service';
import { AdminPunonjesService } from '../../admin-punonjes.service';

@Component({
  selector: 'app-new-punetor',
  templateUrl: './new-punetor.component.html',
  styleUrls: ['./new-punetor.component.scss'],
})
export class NewPunetorComponent implements OnInit {
  title = 'new-punonjes';
  form!: FormGroup;
  llojiINdryshimit = false;

  constructor(
    private router: Router,
    private adminPunonjes: AdminPunonjesService,
    private firebase: FirebaseService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      Id: new FormControl('', Validators.required),
      Emri: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  kthehu() {
    this.router.navigate(['/admin-punonjes']);
  }

  goToAdd() {
    let item = {
      Id: this.form.value.Id,
      emri: this.form.value.Emri,
      username: this.form.value.username,
      password: this.form.value.password,
      role: 'punonjes',
    };
    this.firebase.punonjesIRi(item);
    this.router.navigate(['/admin-punonjes']);
  }
}
