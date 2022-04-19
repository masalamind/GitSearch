import { Component, OnInit } from '@angular/core';
import { GitUserService } from 'src/app/services/git-user.service';
@Component({
  selector: 'app-git-user',
  templateUrl: './git-user.component.html',
  styleUrls: ['./git-user.component.css']
})
export class GitUserComponent implements OnInit {

  // private profile;
  gitUser: any;
  gitRepo: any; 
  username: any;

  constructor(private userService: GitUserService) { 

    
  }

  findUserDetails(){

    this.userService.updateUser(this.username)

    this.userService.getUserInfo().subscribe(userDetails => {
      console.log(userDetails);
      
      this.gitUser = userDetails;
  
    });

    this.userService.getUserRepos().subscribe(userRepository => {
      console.log(userRepository);
      this.gitRepo = userRepository;
      console.log(this.gitRepo);
  
    });
  }


  ngOnInit(): void {
  }

}
