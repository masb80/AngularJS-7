import { Component, OnInit } from '@angular/core';
import{ DataService } from '../data.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  error = '';
  success = '';       

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers(): void {
    this.dataService.getByosUserAll().subscribe(
      (res: User[]) => {
        this.users = res;
       // console.log(this.users);
      },
      (err) => {
        this.error = err;
      }
    );
  }
}

export class User {
  constructor(
    name: string,   
    id?:   number) {}
}
