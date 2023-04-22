import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from 'src/app/share/components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { DenunciationService } from 'src/app/core/services/denunciation.service';
import { IDenunciation } from './create-denunciation/denunciation.model';

@Component({
  selector: 'app-denunciation',
  templateUrl: './denunciation.page.html',
  styleUrls: ['./denunciation.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, MenuComponent, RouterModule]
})
export class DenunciationPage implements OnInit {
  denunciationList: IDenunciation[] = [];

  constructor(
    private denunciationService: DenunciationService
    ) { }

  ngOnInit() {
    this.viewDenunciation();
  }

  viewDenunciation() {
    this.denunciationService.getDenunciation().subscribe(res => {
      this.denunciationList = res;

      
    });
  }

}
