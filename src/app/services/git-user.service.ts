import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'; // return github results in form of observables

@Injectable({
  providedIn: 'root'
})
export class GitUserService {

  private username: string; 
  private clientid: string = "";
  private clientsecret = "";

  constructor(private http: Http) { 

    console.log("Service works!");
    this.username = "John Mo";
  }

  getUserInfo(){
    return this.http.get("https://api.github.com/users/"+ this.username);
  }
}
