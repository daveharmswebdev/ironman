import { Component, OnInit } from '@angular/core';
import { IronService } from './services/ironman.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ironman';

  constructor(private svc: IronService) {}
  ngOnInit() {
    this.svc.getConfig(21).subscribe(val => console.log('from app', val));

    this.svc.getQuicklist().subscribe(console.log);

    this.svc
      .getUser(100, 'collector')
      .subscribe(val => console.log('from app: user', val));
  }
}
