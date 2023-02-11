import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core'; // here should be space
import { User } from 'src/app/model/app.model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input() usersData!: User;
  @Input() roleData!: string;
  @Input() hobbyData!: string[];

  getUserData!: User;
  getRoleData!: string;
  getHobbyData!: string[];

  constructor() { }

  ngOnInit(): void {
    this.getUserData=this.usersData;
    this.getRoleData=this.roleData;
    this.getHobbyData=this.hobbyData;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
  }

}
