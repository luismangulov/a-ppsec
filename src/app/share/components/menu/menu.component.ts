import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonMenu, IonicModule, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class MenuComponent  implements OnInit {
  @Input() menuTitle: string = 'Titulo';
  @ViewChild(IonMenu) menu!: IonMenu;

  constructor(private menuController: MenuController) { }

  ngOnInit() {}

  openMenu() {
    console.log('click')
    // this.menuController.enable(true, 'first');
    this.menu.open()
  }

}
