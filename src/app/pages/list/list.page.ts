import { Component, OnInit } from '@angular/core';
import { DataService, User } from 'src/app/service/data.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuarios: User [];

  constructor(private dataService : DataService) { }

  ngOnInit() {
   this.getUsuarios();
  }

  getUsuarios(){
    this.dataService.getUsuarios().subscribe((res: User[]) => {
      console.log(res);
      this.usuarios = res;
    });
  }


}
