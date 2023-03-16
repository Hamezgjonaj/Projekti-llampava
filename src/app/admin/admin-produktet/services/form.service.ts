import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  editableData = {
    id: 0,
    emer: '',
    cmimi: 0,
    sasia: 0,
    lloji: '',
  };
  upgrateData: any;

  deleteItem: any;

  constructor() {}
}
