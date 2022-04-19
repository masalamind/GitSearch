
import { Injectable } from '@angular/core';
// import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map'; // return github results in form of observables

@Injectable({
  providedIn: 'root'
})
export class GitUserService {

  private username: string; 
  private clientid: string = "";
  private clientsecret = "";

  constructor(private http: HttpClient) { 

    console.log("Service works!");
    this.username = "masalamind";
  }

  getUserInfo(){
    return this.http.get("https://api.github.com/users/"+ this.username);
    // .map(res => res.json());
  }
  getUserRepos(){
    return this.http.get("https://api.github.com/users/"+ this.username + "/repos");
    // .map(res => res.json());
  }
}
