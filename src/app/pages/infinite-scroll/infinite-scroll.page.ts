import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  data: any = Array(20);
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }

  loadData( event ){

    console.log(event);
    setTimeout(() => {
      const nuevoArr = Array(20);
      
      if (this.data.length > 50){
    
        this.infiniteScroll.complete();
        this.infiniteScroll.disabled = true;
        return;
      }

      this.data.push( ...nuevoArr );

      this.infiniteScroll.complete();

    }, 1500);
  }

}
