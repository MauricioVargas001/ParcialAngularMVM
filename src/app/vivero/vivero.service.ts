import { Observable } from 'rxjs';
import { Plants } from './plants';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ViveroService {

  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getPlants(): Observable<Plants[]> {
    return this.http.get<Plants[]>(this.apiUrl);
  }

}
