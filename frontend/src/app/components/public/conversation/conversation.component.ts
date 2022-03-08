import { Component, OnInit ,Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Echo from 'laravel-echo';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from 'src/app/chat.service';


@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  echo!: Echo;
  inputMessage!: string;
  user: any;
  privateMessages: any[] = [];
  users: any[] = [];
  authUser:any;
  username:any
  
  selectedUser: any;
  @Input() message:any;
  @Input() id!:any; 
   
// messageNotification = new EventEmitter<{ newMessage: boolean, senderId: string, receiveId: string}>();
  constructor(private http:HttpClient,private route: ActivatedRoute,private chatService: ChatService) { 
    this.getSocketsId();
  }

  ngOnInit(): void {
   this.route.paramMap.subscribe(params=>{
      this.id=params.get('id')
    });  
    this.getPrivateChat();
  
    
    const headers = new HttpHeaders({
        'Authorization' : `Bearer ${localStorage.getItem('token')}`
      });
    this.http.get('http://localhost:8000/api/chat/'+this.id, {headers:headers}).subscribe(
        (result:any)=>{
        this.user = result
        }
      ); 
      
  }
  getSocketsId() {
    this.echo = this.chatService.getSockets();
  }

  getPrivateChat() {
    this.authUser = this.id;
    this.username = this.authUser.name; 
    const userAuthId = this.authUser.id;
    this.echo.private('channel-direct-message.' + userAuthId)   // channel-direct-message.id
      .listen('DirectMessageEvent', (res:any) => {
        const messages: any= {
          message: res.response.message,
          me: false,
          from: res.response.from.name,
          senderId: res.response.from.id,
          receiveId: res.response.authUserId
        };
        const msgNotification = {
          newMessage: true,
          senderId: res.response.from.id,
          receiveId: res.response.authUserId
        };
        this.privateMessages.push(messages);
        //this.messageNotification.emit(msgNotification);
        console.log('Get Private message from chat : ', this.privateMessages);
      });
  }

  sendPrivateMessage() {
    const socketId = this.echo.socketId();
    const selectedID = this.selectedUser?.id;
    this.chatService.sendDirectMessage(this.inputMessage, +selectedID, socketId)
      .subscribe((data:any) => console.log('subscribe data : ', data) );
    const message: any = {
      message: this.inputMessage,
      me: true,
      from: 'You',
      senderId: this.authUser.id,
      receiveId: selectedID
    };
    this.inputMessage = '';
    this.privateMessages.push(message);
    console.log('Send Private message from chat : ', this.privateMessages);
  }



 

}
