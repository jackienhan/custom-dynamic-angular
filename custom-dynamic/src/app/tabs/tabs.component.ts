import {AfterContentInit, AfterViewInit, Component, ContentChildren, OnInit, QueryList} from '@angular/core';
import {TabComponent} from './tab/tab.component';



@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, AfterContentInit {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  constructor() { }

  ngAfterContentInit(): void {
    console.log(this.tabs);
    const activeTabs = this.tabs.filter(tab => tab.active);
    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  ngOnInit(): void {
  }
  selectTab(tab): void{
    console.log(tab);
    // deactivate all tabs
    // tslint:disable-next-line:no-shadowed-variable
    this.tabs.toArray().forEach((tab) => tab.active = false);

    // activate the tab the user has clicked on.
    tab.active = true;
  }
}
