import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonMenu, IonicModule, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
})
export class LayoutComponent  implements OnInit {
  // @ViewChild(IonMenu) menu!: IonMenu;
  constructor(private menuController: MenuController) { }

  ngOnInit() {}

  closeMenu() {
    console.log('click')
    this.menuController.close();
  }

}
