import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent implements OnInit {

  public display = 'test';
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onClick =  new EventEmitter<any>();
  @Input() items: [];
  constructor() { }

  ngOnInit(): void {
  }

  on(item): void {
   this.display = item.value;
   console.log(this.display);
   this.onClick.emit(item);
  }
}
