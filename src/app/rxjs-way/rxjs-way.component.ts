import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, of, combineLatest } from 'rxjs';
import { IQuickList, IUser, IComics } from '../state/models';
import { Store, select } from '@ngrx/store';
import { AppState } from '../reducers';
import { IronService } from '../services/ironman.service';
import { selectId, selectRegion } from '../state/selectors/config.selectors';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-way',
  templateUrl: './rxjs-way.component.html',
  styleUrls: ['./rxjs-way.component.scss']
})
export class RxjsWayComponent implements OnInit {
  public comicForm: FormGroup;

  public price: number = null;

  private id$: Observable<number>;
  public quickListOptions$: Observable<IQuickList[]> = of([]);
  public users$: Observable<IUser[]> = of([]);
  public comics$: Observable<IComics[]> = of([]);

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private service: IronService
  ) {}

  ngOnInit() {
    this.comicForm = this.fb.group({
      quicklist: ['', Validators.required],
      user: ['', Validators.required],
      comic: [null, Validators.required]
    });

    this.id$ = this.store.pipe(select(selectId));

    this.quickListOptions$ = this.id$.pipe(
      switchMap(id => this.service.getQuicklist(id))
    );

    this.users$ = combineLatest(
      this.id$,
      this.comicForm.get('quicklist').valueChanges
    ).pipe(
      switchMap(([id, list]: [number, IQuickList]) => {
        return this.service.getUsers(id, list.value);
      })
    );

    this.comics$ = combineLatest(
      this.comicForm.get('user').valueChanges,
      this.id$,
      this.store.pipe(select(selectRegion))
    ).pipe(
      switchMap(([user, siteId, region]: [IUser, number, string]) => {
        return this.service.getComics(user.id, siteId, region);
      })
    );
  }

  submit() {
    this.price = this.comicForm.get('comic').value.price;
  }

  cancel() {
    this.comicForm.patchValue({
      quicklist: '',
      user: '',
      comic: null
    });

    this.price = null;
    this.comicForm.get('quicklist').setErrors(null);
    this.comicForm.get('user').setErrors(null);
    this.comicForm.get('comic').setErrors(null);
  }
}
