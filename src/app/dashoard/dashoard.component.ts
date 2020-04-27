import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-dashoard',
  templateUrl: './dashoard.component.html',
  styleUrls: ['./dashoard.component.scss'],
})
export class DashoardComponent implements OnInit {

  constructor(private route: Router, private send:DataService, private menu: MenuController) { }

  ngOnInit() {}

  redirectTo(type){    
       this.route.navigate(['home']);
       this.send.changeMessage(type);
       
  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }


}
