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
  constructor(private userService: GitUserService) { 

    this.userService.getUserInfo().subscribe(userDetails => {
      console.log(userDetails);
      
      this.gitUser = userDetails;
  
    });
  }

  ngOnInit(): void {
  }

}
