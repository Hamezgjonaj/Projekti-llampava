import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from '../services/form.service';
import { FirebaseService } from '../../../firebase.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  title = 'form';
  form!: FormGroup;
  addProduct: boolean = false;
  editProduct: boolean = false;
  llojiINdryshimit = false;
  llojet = ['kafe', 'alkolike', 'freskuese', 'tjera'];

  constructor(
    private router: Router,
    private formService: FormService,
    private firebase: FirebaseService
  ) {}

  ngOnInit(): void {
    let id: any = '';
    let emer: any = '';
    let cmimi: any = '';
    let sasia: any = '';
    let lloji: any = '';
    if (this.formService.editableData.id !== 0) {
      id = this.formService.editableData.id;
      this.llojiINdryshimit = true;
    }
    if (this.formService.editableData.emer !== '') {
      emer = this.formService.editableData.emer;
      this.llojiINdryshimit = true;
    }
    if (this.formService.editableData.cmimi !== 0) {
      cmimi = this.formService.editableData.cmimi;
      this.llojiINdryshimit = true;
    }
    if (this.formService.editableData.sasia !== 0) {
      sasia = this.formService.editableData.sasia;
      this.llojiINdryshimit = true;
    }
    if (this.formService.editableData.lloji !== '') {
      lloji = this.formService.editableData.lloji;
      this.llojiINdryshimit = true;
    }

    this.form = new FormGroup({
      Id: new FormControl(id, Validators.required),
      Emri: new FormControl(emer, Validators.required),
      Cmimi: new FormControl(cmimi, Validators.required),
      Sasia: new FormControl(sasia, Validators.required),
      lloji: new FormControl(lloji, Validators.required),
    });
  }
  kthehu() {
    this.router.navigate(['/admin-produktet']);
  }

  goToAdd() {
    if (this.llojiINdryshimit === true) {
      let item = this.formService.editableData;
      item.emer = this.form.value.Emri;
      item.cmimi = this.form.value.Cmimi;
      item.sasia = this.form.value.Sasia;
      this.firebase.ndryshoProdukt(item);

      this.router.navigate(['/admin-produktet']);
    } else {
      let item = {
        id: this.form.value.Id,
        emer: this.form.value.Emri,
        cmimi: this.form.value.Cmimi,
        sasia: this.form.value.Sasia,
        lloji: this.form.value.lloji,
      };
      this.firebase.addProduct(item);
      this.router.navigate(['/admin-produktet']);
    }
  }
}
