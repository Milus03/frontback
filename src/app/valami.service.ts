import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValamiService {

  private url = 'http://localhost:3000/data';
  constructor(private http: HttpClient) { }

  // Összes adat lekérése
  getAll(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  // Egy elem lekérése ID alapján
  getOne(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }

  // Új termék hozzáadása
  create(data: any): Observable<any> {
    return this.http.post<any>(this.url, data);
  }

  // Termék frissítése ID alapján
  update(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.url}/${id}`, data);
  }

  // Termék módosítása (patch)
  patch(id: number, data: any): Observable<any> {
    return this.http.patch<any>(`${this.url}/${id}`, data);
  }

  // Termék törlése ID alapján
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}
