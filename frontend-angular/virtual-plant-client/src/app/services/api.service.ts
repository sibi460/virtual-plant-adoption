import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

 getPlants(): Observable<any> {
    return this.http.get(`${this.baseUrl}/plants`);
  }

  getPlantById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/plants/${id}`);
  }

  adoptPlant(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/adoptions`, data);
  }

  getUserAdoptions(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/adoptions/user/${userId}`);
  }
}
