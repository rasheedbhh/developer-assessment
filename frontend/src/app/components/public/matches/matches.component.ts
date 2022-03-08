import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/matches';
import { MATCHES } from 'src/app/mock-matches';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavigationExtras, Route, Router } from '@angular/router';
@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})

export class MatchesComponent implements OnInit {
  matches:Match[] = MATCHES;
  auth: any; 
  users!:any [];
  data: any;
 

  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {

  const headers = new HttpHeaders({
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    });
  this.http.get('http://localhost:8000/api/user', {headers:headers}).subscribe(
      result=>this.auth = result 
    );  
  this.http.get('http://localhost:8000/api/getUsers', {headers:headers}).subscribe(
     (res:any)=>{
       this.users=res;
       console.log(res);
      }
    );

  }
  passId(id:any) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "id": id
      }
    };
    this.router.navigate(['/chat/'], navigationExtras);
  }
}
