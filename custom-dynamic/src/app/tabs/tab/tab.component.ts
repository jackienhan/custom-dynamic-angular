import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('tabTitle') title: string;
  @Input() active = false;
  constructor() { }

  ngOnInit(): void {
  }

}
