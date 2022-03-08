import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import Echo from 'laravel-echo';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  token!: string;
  constructor(private httpClient: HttpClient) { 
  /*   const userInfo = JSON.parse();
    this.token = userInfo?.value?.accessToken; */
  }

  getSockets(): Echo {
    return new Echo({
      broadcaster: 'pusher',
      key: 'anyKey',
      cluster: 'mt1',
      wsHost:  window.location.hostname,          
      authEndpoint: 'http://localhost:8000/broadcasting/auth',
      auth: {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      },
      encrypted: false,   // set it to true when use custom SSL certificate
      forceTLS: false,    // it's important to added this line
      wsPort: 6001,
      disableStats: true,
    });
  }
  
  sendDirectMessage(message: string, authUserId: number, socketId: string) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`,
        'X-Socket-ID': socketId
      })
    };
    const data = { message, authUserId };
    return this.httpClient.post('http://local:8000/api/user', data, options);
  }

  sendMessage(message: string, socketId: string) {
    // We Insert the Token in header here and not in AuthTokenInterceptor because we want to send 'X-Socket-ID' with headers
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`,
        'X-Socket-ID': socketId
      })
    };
    return this.httpClient.post('http://local:8000/api/directMessage', {message}, options);
  }
}


