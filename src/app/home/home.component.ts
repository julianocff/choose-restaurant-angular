import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ganhador;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getVencedor().subscribe((response) => {
      this.ganhador = response;
    });
  }

}
