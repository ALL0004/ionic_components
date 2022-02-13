import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {

  fechaNaci: Date = new Date();

  yearCustom: Number[] = [2021, 2012, 2013];

  customPickerOptions = {
    buttons:[{
      text: 'Hola',
      handler: ( event ) => { console.log( event )}

    },{
      text: 'Mundo',
      handler: () => {
        console.log('log!')
      }
    }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

  cambioFecha( event ){
    console.log(event);
    console.log( new Date (event.detail.value));
  }
}
