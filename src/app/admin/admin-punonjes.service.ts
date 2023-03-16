import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminPunonjesService {
  editableData = {
    id: 0,
    emer: '',
    username: 0,
    password: 0,
  };
  upgrateData: any;
  constructor() { }
}
