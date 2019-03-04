import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User = new User();
  constructor(activatedRoute: ActivatedRoute) { 
    activatedRoute.params.subscribe((params) =>{
      this.user.username = params['username'];
    });
  }

  ngOnInit() {
  }

}

class User{
  username:string;
}


