import { Component } from '@angular/core';
import { FitNSToolService } from '../fit-ns-tool.service';
import { User } from '../User';

@Component({
  selector: 'app-login',
  standalone : true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userList : User[] = [] ;
  constructor(private toolService : FitNSToolService){

  }

  ngOnInit(){
    let response = this.toolService.getUsers().subscribe(data => this.userList = data);
    return response;
}

}
