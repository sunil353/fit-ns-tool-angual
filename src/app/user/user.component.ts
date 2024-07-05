import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { CommonModule } from '@angular/common';
import { FitNSToolService } from '../fit-ns-tool.service';

@Component({
  selector: 'app-user',
  standalone :true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports : [CommonModule]
})
export class UserComponent  implements OnInit{

    
 userList : User[] = [] ;
      // User={
      //         "id" : 101,
      //         "name" : "stoke",
      //         "email" : "stoke@gmail.com",
      //         "mobile" : 8877993355
      //       }
 constructor(private toolService : FitNSToolService ){

 }
 ngOnInit(){
      let response = this.toolService.getUsers().subscribe(data => this.userList = data);
      return response;
 }


}
