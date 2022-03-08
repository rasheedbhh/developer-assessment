import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!:FormGroup;
  constructor(private fb:FormBuilder,
              private http: HttpClient,
              private router:Router) {

   }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: '',
      password: ''
    });
  }
  //this funciton will be used to log the user in 
  submit(){
    
    const formData = this.form.getRawValue();
    const data = {
      username: formData.email,
      password: formData.password,
      grant_type: 'password',
      client_id: 2,
      client_secret: 'o1fQHAG3v8benWOkkDXy9JwWd19afSGuwJhGKeaa',
      scope: '*'
    };
/*     console.log(data); */
 /*    const idk = this.http.post('http://localhost:8000/oauth/token', data);
    console.log(idk) */;
  this.http.post('http://localhost:8000/oauth/token', data).subscribe(
      (result:any)=>{
        console.log('success');
        localStorage.setItem('token',result.access_token);
        this.router.navigate(['/']);
        
      },
      error=>{
        console.log('error');
        console.log(error);
      }
    ); 
  }
  }

