import { Component,OnInit } from '@angular/core';
import Echo from 'laravel-echo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ChatApplication';
  name = "Carla";
  image = "assets/girl6.jpg";
  message = "Hey there cowboy!";
  constructor(){

  }
  ngOnInit(): void {

  }
}
