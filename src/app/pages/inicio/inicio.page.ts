import { Component, OnInit } from '@angular/core';
import { ActionSheetPage } from '../action-sheet/action-sheet.page';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  listaComponentes: any[];
  constructor() { }

  ngOnInit() {
    this.generateListOfComponents();
  }
  generateListOfComponents() {
    this.listaComponentes = [
      {
        name: 'Action-Sheet',
        route: 'action-sheet',
        icon: 'list-outline'
      },
      {
        name: 'Alert',
        route: 'alert',
        icon: 'chatbox-outline'
      }
      ,
      {
        name: 'Avatar',
        route: 'avatar',
        icon: 'beaker-outline'
      },
      {
        name: 'Button',
        route: 'button',
        icon: 'radio-button-off-outline'
      },
      {
        name: 'Cards',
        route: 'card',
        icon: 'card-outline'
      }
      ,
      {
        name: 'Checkbox',
        route: 'checkbox',
        icon: 'checkmark-circle-outline'
      },
      {
        name: 'Datetime',
        route: 'datetime',
        icon: 'time-outline'
      },
      {
        name: 'Fab',
        route: 'fab',
        icon: 'add-circle-outline'
      }
      ,
      {
        name: 'Grid',
        route: 'grid',
        icon: 'grid-outline'
      }
      ,
      {
        name: 'Infinite-Scroll',
        route: 'infinite-scroll',
        icon: 'infinite-outline'
      }
      ,
      {
        name: 'Input',
        route: 'input',
        icon: 'hammer-outline'
      }
      ,
      {
        name: 'List',
        route: 'list',
        icon: 'list-outline'
      }
    ]
  }

}
