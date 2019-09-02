import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { IQuickList, IUser, IComics, IConfig } from '../state/models';
import { AppState } from '../reducers';
import { Store, select } from '@ngrx/store';
import { selectId, selectRegion } from '../state/selectors/config.selectors';
import { IronService } from '../services/ironman.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {
  public comicForm: FormGroup;

  private localId: number;
  public price: number = null;

  private id$: Observable<number>;
  public quickListOptions$: Observable<IQuickList[]> = of([]);
  public users$: Observable<IUser[]> = of([]);
  public comics$: Observable<IComics[]> = of([]);

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private service: IronService
  ) { }

  ngOnInit() {
    this.comicForm = this.fb.group({
      quicklist: ['', Validators.required],
      user: ['', Validators.required],
      comic: [null, Validators.required]
    });

    this.id$ = this.store.pipe(select(selectId));

    this.id$.subscribe(
      id => {
        this.localId = id;
        this.quickListOptions$ = this.service.getQuicklist(id);
      }
    );
  }

  selectQuickList() {
    const quickList: IQuickList = this.comicForm.get('quicklist').value;

    this.users$ = this.service.getUsers(this.localId, quickList.value);
  }

  selectUser() {
    const user: IUser = this.comicForm.get('user').value;

    this.store.pipe(select(selectRegion)).subscribe(
      region => {
        this.comics$ = this.service.getComics(user.id, this.localId, region);
      }
    );
  }

  selectComic() {
    this.price = this.comicForm.get('comic').value.price;
  }

  submit() {
    console.log(this.price);
  }

  cancel() {
    this.comicForm.patchValue({
      quicklist: '',
      user: '',
      comic: null
    });

    this.comicForm.get('quicklist').setErrors(null);
    this.comicForm.get('user').setErrors(null);
    this.comicForm.get('comic').setErrors(null);
  }
}
