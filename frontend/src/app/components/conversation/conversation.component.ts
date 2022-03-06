import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Echo from 'laravel-echo';
@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  echo!: Echo;
  inputMessage!: string;
  username = 'Carla Jeager';

  constructor() { 

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
        this.username = res.message;
      });
      
  }
  

  sendMessage(){
    console.log('Message : ', this.inputMessage);
  }
 

}
