import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/app.model'; // Use Relative Path

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  // role!: string;
  role: string = '';
  hobby!: string[];
  users!: User;

  // role: string = 'admin';
  // hobby: string[] = ['Cricket', 'Football'];
  // users: Users = {
  //   name:'Prashant',
  //   city:'Gwalior'
  // }

  constructor() { }

  ngOnInit(): void {
    this.role = 'admin';
    this.hobby = ['Cricket', 'Football'];
    this.users = {
      name:'Prashant',
      city:'Gwalior'
    }
  }

}
