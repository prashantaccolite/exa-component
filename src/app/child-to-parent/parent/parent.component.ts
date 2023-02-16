import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor() { }

  name: string = '';
  city: string = '';

  ngOnInit(): void {
  }

  getDataFromChild(e: any){
    console.log('rcv event', e);
    this.name = e.name;
    this.city = e.city;
  }

}
