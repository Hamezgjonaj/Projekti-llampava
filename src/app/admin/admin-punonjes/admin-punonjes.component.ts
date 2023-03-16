import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { FirebaseService } from 'src/app/firebase.service';

// export interface PeriodicElement {
//   emri: string;
//   Id: number;
//   username: number | string;
//   password: string | number;
//   role: string;
// }

@Component({
  selector: 'app-admin-punonjes',
  templateUrl: './admin-punonjes.component.html',
  styleUrls: ['./admin-punonjes.component.scss'],
})
export class AdminPunonjesComponent implements OnInit {
  showModal: boolean = false;
  deletePunonjes: boolean = false;
  displayedColumns: string[] = ['Id', 'emri', 'username', 'password', 'veprim'];
  data: any[] = [];

  constructor(private firebase: FirebaseService) {}

  setShowModal(value: boolean, item: any) {
    console.log(item);
    this.firebase = item;
    this.showModal = value;
  }
  goToDelete(item: any) {
    this.deletePunonjes = false;
    this.showModal = true;
    this.deletePunonjes = item;
  }
  deleteFunction(event: any) {
    this.firebase.fshiPunonjes(event.customIdName);
  }

  ngOnInit(): void {
    this.firebase.getPunonjes().subscribe((punonjesit: any) => {
      this.data = punonjesit;
    });
  }
}
