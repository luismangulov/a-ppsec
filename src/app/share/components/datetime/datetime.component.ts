import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IonDatetime, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class DatetimeComponent implements OnInit {
  @Output() onEvent: EventEmitter<string> = new EventEmitter();
  @ViewChild(IonDatetime) datetime!: IonDatetime;
  @Input() presentation: string = 'date';
  dateSave: string = new Date().toISOString();

  constructor() { }

  ngOnInit() { }

  onChange(value: any) {
    if (Boolean(value)) this.dateSave = value;
    console.log(this.dateSave);
    this.onEvent.emit(this.dateSave);
  }

  onSelect() {
    this.datetime.confirm(true);
  }

}
