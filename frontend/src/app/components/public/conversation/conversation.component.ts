import { Component, OnInit ,Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Echo from 'laravel-echo';
import { ActivatedRoute } from '@angular/router';
ActivatedRoute
@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  echo!: Echo;
  inputMessage!: string;
  user: any;
 /*  username = 'Carla Jeager'; */
 /* @Input() username!:string;
 @Input() image!:string;
 @Input() message!:string; */
 @Input() id!:any; 
 private sub: any;
  constructor(private http:HttpClient,private route: ActivatedRoute) { 

  }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(params=>{
      this.id=params.get('id') //+ string to number
})
/*     const echo = new Echo({
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
      }); */
      const headers = new HttpHeaders({
        'Authorization' : `Bearer ${localStorage.getItem('token')}`
      });
    this.http.get('http://localhost:8000/api/chat/'+this.id, {headers:headers}).subscribe(
        (result:any)=>{
        this.user = result
        console.log(result);
        }
      ); 
      
  }
  

  sendMessage(){
    console.log('Message : ', this.inputMessage);
  }
 

}
