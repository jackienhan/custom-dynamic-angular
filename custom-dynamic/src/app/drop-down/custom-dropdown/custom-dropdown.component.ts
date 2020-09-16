import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CdkPortal} from '@angular/cdk/portal';



@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss']
})
export class CustomDropdownComponent implements OnInit {
  @Input()
  public reference: HTMLElement;

  @ViewChild(CdkPortal, {static : false})
  public contentTemplate: CdkPortal;
  constructor() { }

  ngOnInit(): void {
  }

}
