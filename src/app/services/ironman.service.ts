import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { IConfig, IQuickList, IUser, IComics } from '../state/models';

@Injectable({
  providedIn: 'root'
})
export class IronService {

  constructor(private http: HttpClient) {}

  getConfig(id: number) {
    const url = 'http://localhost:3000/config/' + id;
    return this.http.get<IConfig>(url);
  }

  getQuicklist(id: number) {
    const url = 'http://localhost:3000/quicklist';
    return this.http.get<IQuickList[]>(url).pipe(
      map(list => list.filter(item => item.configId === id))
    );
  }

  getUsers(id: number, role: string) {
    const url = 'http://localhost:3000/user';
    return this.http.get<IUser[]>(url).pipe(
      map(users => users.filter(user => user.role === role))
    );
  }

  getComics(userId: number, siteId: number, region: string) {
    const url = 'http://localhost:3000/comics';

    return this.http.get<IComics[]>(url);
  }
}
