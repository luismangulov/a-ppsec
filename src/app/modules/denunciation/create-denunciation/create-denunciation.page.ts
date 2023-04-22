import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertController, IonicModule } from '@ionic/angular';
import { MenuDefaultComponent } from 'src/app/share/components/menu-default/menu-default.component';
import { DatetimeComponent } from 'src/app/share/components/datetime/datetime.component';
import { Denunciation, StatusDenunciation } from './denunciation.model';
import { DenunciationService } from 'src/app/core/services/denunciation.service';
import { UTILService } from 'src/app/share/utils/util.service';
import { Router } from '@angular/router';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { getApp } from '@angular/fire/app';

interface EmailParams {
  to: string;
  subject: string;
  body: any;
}

@Component({
  selector: 'app-create-denunciation',
  templateUrl: './create-denunciation.page.html',
  styleUrls: ['./create-denunciation.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MenuDefaultComponent,
    DatetimeComponent,
    ReactiveFormsModule
  ]
})
export class CreateDenunciationPage implements OnInit {

  form!: FormGroup;
  profession!: FormControl;
  dateEvent!: FormControl;
  timeEvent!: FormControl;
  state!: FormControl;
  venueEvent!: FormControl;
  modality!: FormControl;
  observations!: FormControl;

  loadingButton = false;

  get modalityList() {
    return UTILService.converList(UTILService.modality);
  }

  constructor(
    private alertController: AlertController,
    private fb: FormBuilder,
    private denunciationService: DenunciationService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.validateForm();
    this.createForm();
  }

  validateForm() {
    this.profession = new FormControl(null, [Validators.required])
    this.dateEvent = new FormControl(null, [Validators.required])
    this.timeEvent = new FormControl(null, [Validators.required])
    this.state = new FormControl(null, [Validators.required])
    this.venueEvent = new FormControl(null, [Validators.required])
    this.modality = new FormControl(null, [Validators.required])
    this.observations = new FormControl(null, [Validators.required])
  }

  createForm() {
    this.form = this.fb.group({
      profession: this.profession,
      dateEvent: this.dateEvent,
      timeEvent: this.timeEvent,
      state: this.state,
      venueEvent: this.venueEvent,
      modality: this.modality,
      observations: this.observations
    })
  }

  onSetDate($ev: any) {
    this.dateEvent.setValue($ev);
  }

  onSetTime($ev: any) {
    this.timeEvent.setValue($ev);
  }

  // testclick($ev: any) {

  //   const sendEmail : EmailParams = {
  //     to: 'bysnark@live.com',
  //     subject: 'hola que haces.',
  //     body: "hola mundo",
  //   }

  //   const app = getApp();
  //   const functions = getFunctions(app);
  //   const myFunction = httpsCallable(functions, 'sendEmail');
  //   myFunction(sendEmail).then(result => {
  //     console.log(result);
  //   }).catch(error => {
  //     console.log(error)
  //   })
  // }

  async onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loadingButton = false;

    const denunciation = new Denunciation({
      profession: this.profession.value,
      dateEvent: this.dateEvent.value,
      timeEvent: this.timeEvent.value,
      state: this.state.value,
      venueEvent: this.venueEvent.value,
      modality: this.modality.value,
      observations: this.observations.value,
      numero: parseInt(Date.now().toString().slice(0, 5)),
      status: StatusDenunciation.tramite
    });



    const alert = await this.alertController.create({
      header: 'Ingrese su correo',
      subHeader: 'Por favor, ingrese su correo para enviar el reporte de su denuncia.',
      buttons: [
        // {
        //   text: 'Cancelar',
        //   role: 'cancel',
        //   handler: () => {
        //     throw new Error('NO HAY PASSWORD');
        //   }
        // },
        {
          text: 'Enviar',
          role: 'confirm',
          handler: async (data) => {
            alert.onDidDismiss();
            const email: string = data.email;


            const sendEmail : EmailParams = {
              to: email,
              subject: 'Denuncia N° ' + denunciation.numero,
              body: {...denunciation},
            }
        
            const app = getApp();
            const functions = getFunctions(app);
            const myFunction = httpsCallable(functions, 'sendEmail');
            myFunction(sendEmail).then(result => {
              console.log(result);
            }).catch(error => {
              console.log(error)
            })

            this.denunciationService.addDenunciation({ ...denunciation, email }).then(res => {
              this.loadingButton = false;
              this.router.navigate(['/account/denunciation']);
            });
            
          }
        }],
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'Correo',
        },
      ],
    });
    await alert.present();

    return




  }

}
