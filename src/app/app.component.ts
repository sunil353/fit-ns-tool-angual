
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-root',
    standalone : true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [ FormsModule, UserComponent, ProductComponent,
               AboutComponent, HomeComponent, LoginComponent,
               RouterModule,CommonModule ],
    providers:[]
})
export class AppComponent {
  title = 'GroceryStoreAngularProject';
  
  message: any  ="Hello, Welcome ...!!!";
  
}
