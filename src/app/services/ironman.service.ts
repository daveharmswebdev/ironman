import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { IConfig, IQuickList, IUser } from '../state/models';

@Injectable({
  providedIn: 'root'
})
export class IronService {

  constructor(private http: HttpClient) {}

  getConfig(id: number) {
    const url = 'http://localhost:3000/config/' + id;
    return this.http.get<IConfig>(url);
  }

  getQuicklist() {
    const url = 'http://localhost:3000/quicklist';
    return this.http.get<IQuickList[]>(url);
  }

  getUser(id: number, role: string) {
    const url = 'http://localhost:3000/user';
    return this.http.get<IUser[]>(url).pipe(
      map(users => users.filter(user => user.role === role))
    );
  }
}
