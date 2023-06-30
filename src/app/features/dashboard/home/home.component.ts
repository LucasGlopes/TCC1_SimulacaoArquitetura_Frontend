import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from 'src/app/services/currentUser.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  
  constructor(
    private currentUser: CurrentUserService
  ){

  }

  ngOnInit(): void {
    console.log(this.currentUser.getUserValues())
  }
}
