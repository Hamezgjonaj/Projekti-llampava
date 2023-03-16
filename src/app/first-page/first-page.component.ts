import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss'],
})
export class FirstPageComponent implements OnDestroy {
  constructor() {}

  ngOnDestroy(): void {
    console.log('FirstPageComponent destroyed');
  }
}

