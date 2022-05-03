import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiResponse, ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @Output() isLogout = new EventEmitter<void>()

  results!: ApiResponse[];

  public response$ = this.getApi.getApiResponse()
    
  constructor(private getApi: ApiService) {}

  logout(){
    this.getApi.logOut()
    this.isLogout.emit()
  }
}
