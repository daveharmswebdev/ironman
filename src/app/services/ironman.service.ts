import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IronService {

  constructor(private http: HttpClient) {}

  getConfig(id: number) {
    const url = 'http://localhost:3000/config/' + id;
    return this.http.get<any>(url).pipe(tap(console.log));
  }

  getQuicklist() {
    const url = 'http://localhost:3000/quicklist';
    return this.http.get<any>(url);
  }

  getUser(id: number, role: string) {
    const url = 'http://localhost:3000/user';
    return this.http.get<any>(url).pipe(
      map(users => users.filter(user => user.role === role))
    );
  }
}
