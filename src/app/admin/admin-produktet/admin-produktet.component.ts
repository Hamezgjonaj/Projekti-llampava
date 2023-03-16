import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { FormService } from './services/form.service';
import { FirebaseService } from '../../firebase.service';

@Component({
  selector: 'app-admin-produktet',
  templateUrl: './admin-produktet.component.html',
  styleUrls: ['./admin-produktet.component.scss'],
})
export class AdminProduktetComponent implements OnInit, AfterViewInit {
  addProduct: boolean = false;
  editProduct: boolean = false;
  deleteProduct: boolean = false;
  showModal: boolean = false;
  form!: FormGroup;
  allData: any = [];
  data: any = [];
  searchText: any;
  dataSource = new MatTableDataSource(this.data);
  dataSourceWithPageSize = new MatTableDataSource(this.data);


 

  constructor(
    private router: Router,
    private fromService: FormService,
    private firebase: FirebaseService
  ) {}

  searchArray = (toSearch: string, array: any[]) => {
    let terms = toSearch.split(' ');
    return array.filter((object) =>
      terms.every((term) =>
        Object.values(object).some((value: any) =>
          typeof value === 'string' || value instanceof String
            ? value.includes(term)
            : false
        )
      )
    );
  };

  filter() {
    this.data = this.searchArray(this.form.value.filter, this.data);
    if (this.form.value.filter === '') {
      this.data = this.allData;
    }
  }

  pagination(event: any) {
    console.log(event);
    console.log(
      this.data.slice(
        event.previousPageIndex * event.pageSize,
        event.pageIndex * event.pageSize
      )
    );
  }

  setShowModal(value: boolean, item: any) {
    console.log(item);
    this.fromService.deleteItem = item;
    this.showModal = value;
  }

  deleteFunction(event: any) {
    if (event.type === 'yes') {
      this.firebase.fshiProdukt(event.id);
      this.showModal = false;
    }
    if (event.type === 'close' || event.type === 'no') {
      this.showModal = false;
    }
  }

  ngAfterViewInit() {
  }

  ngOnInit(): void {
    this.fromService.editableData = {
      id: 0,
      emer: '',
      cmimi: 0,
      sasia: 0,
      lloji: '',
    };
    this.firebase.getData().subscribe((data: any) => {
      console.log('data nga firebasi', data);
      this.allData = data;
      this.data = this.allData;
    });
    this.form = new FormGroup({
      filter: new FormControl(''),
    });
  }

  goToEdit(item: any) {
    this.editProduct = true;
    this.addProduct = false;
    this.fromService.editableData = item;
    this.router.navigate(['form']);
  }
  goToDelete(item: any) {
    this.deleteProduct = false;
    this.showModal = true;
    this.fromService.editableData = item;
  }
  goToAdd(item: any) {
    this.addProduct = true;
    this.editProduct = false;
    this.router.navigate(['form']);
    this.fromService.editableData = item;
       
  }
}
