import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss'],
})
export class DeleteModalComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<any>();

  action(value: any) {
    let action = {
      type: value,
      id: this.fromService.deleteItem.customIdName,
    };
    this.newItemEvent.emit(action);
    
  }

  constructor(private fromService: FormService) {}

  ngOnInit(): void {}
}
