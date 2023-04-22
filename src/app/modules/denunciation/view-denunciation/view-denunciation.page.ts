import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuDefaultComponent } from 'src/app/share/components/menu-default/menu-default.component';
import { DenunciationService } from 'src/app/core/services/denunciation.service';
import { IDenunciation } from '../create-denunciation/denunciation.model';
import { ActivatedRoute } from '@angular/router';
import { UTILService } from 'src/app/share/utils/util.service';

@Component({
  selector: 'app-view-denunciation',
  templateUrl: './view-denunciation.page.html',
  styleUrls: ['./view-denunciation.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, MenuDefaultComponent]
})
export class ViewDenunciationPage implements OnInit {
  denunciation?: IDenunciation;
  modalityList = UTILService.modality


  constructor(
    private denunciationService: DenunciationService,
    private route: ActivatedRoute
  ) { }



  ngOnInit() {
    const idDoc = this.route.snapshot.paramMap.get('idDoc');
    this.viewDenunciation(idDoc?? '');
  }

  viewDenunciation(id: string) {
    this.denunciationService.getIdDenunciation(id).subscribe((res) => {
      this.denunciation = res;
    });
  }

}
