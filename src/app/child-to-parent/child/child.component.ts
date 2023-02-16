import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Output() customEvent =  new EventEmitter();
  
  // Create model
  userInfo:any = {};

  constructor() { }

  ngOnInit(): void {
    this.userInfo = {
      name: 'Prashant Shrivastava',
      city: 'Gwalior'
    }
  }

  getData(){
    this.customEvent.emit(this.userInfo);
  }

}
