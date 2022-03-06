import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { USERS } from 'src/app/mock-users';
@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  users:User[] = USERS;
  constructor() { }

  ngOnInit(): void {
  }

}
