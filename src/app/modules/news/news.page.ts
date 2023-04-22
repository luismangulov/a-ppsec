import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from 'src/app/share/components/menu/menu.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, MenuComponent]
})
export class NewsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
