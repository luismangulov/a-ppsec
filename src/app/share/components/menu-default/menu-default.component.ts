import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-menu-default',
  templateUrl: './menu-default.component.html',
  styleUrls: ['./menu-default.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class MenuDefaultComponent  implements OnInit {
  @Input() menuTitle: string = 'Title';
  @Input() defaultHref: string = '/account/home'
  constructor() { }

  ngOnInit() {}

}
