import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-select-option',
  templateUrl: './custom-select-option.component.html',
  styleUrls: ['./custom-select-option.component.scss']
})
export class CustomSelectOptionComponent implements OnInit {

  public data = [];
  constructor() { }

  ngOnInit(): void {
    this.data = [
      {
        id: 1,
        value: 'one'
      },
      {
        id: 2,
        value: 'two'
      }, {
        id: 3,
        value: 'three'
      }
    ];
  }

  saveData(item): void {
    console.log(item);
  }
 }
