import { Component,OnInit } from '@angular/core';
import Echo from 'laravel-echo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ChatApplication';
  constructor(){

  }
  ngOnInit(): void {
    const echo = new Echo({
      broadcaster: 'pusher',
      key: 'anyKey',
      cluster: 'mt1',
      wsHost: window.location.hostname,
      wsPort: 6001,
      forceTLS: false,    // Important Line
      disableStats: true,
    });
    echo.channel('chat')
      .listen('ChatEvent', (res:any) => {
        console.log('Chat Event Data : ', res);
      });
  }
}
