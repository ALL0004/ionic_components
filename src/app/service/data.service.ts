import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

export interface User{
  
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: string,
        lng: string
      }
    };
    phone: string;
    website: string;
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    };
  
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) {

  }
  getUsuarios() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  };
}

