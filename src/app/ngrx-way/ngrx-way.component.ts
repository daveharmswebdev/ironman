import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { IQuickList, IUser, IComics } from '../state/models';
import { Store, select } from '@ngrx/store';
import { AppState } from '../reducers';
import { FetchUsers, FetchQuickList, FetchComics, SetPrice, ClearFormOptions } from '../state/actions/comic.actions';
import { selectQuickListOptions, selectUsers, selectComics, selectPrice } from '../state/selectors/comic.selectors';

@Component({
  selector: 'app-ngrx-way',
  templateUrl: './ngrx-way.component.html',
  styleUrls: ['./ngrx-way.component.scss']
})
export class NgrxWayComponent implements OnInit {
  public comicForm: FormGroup;

  public quickListOptions$: Observable<IQuickList[]> = of([]);
  public users$: Observable<IUser[]> = of([]);
  public comics$: Observable<IComics[]> = of([]);
  public price$: Observable<number> = of(null);

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.comicForm = this.fb.group({
      quicklist: ['', Validators.required],
      user: ['', Validators.required],
      comic: [null, Validators.required]
    });

    this.store.dispatch(new FetchQuickList());

    this.quickListOptions$ = this.store.pipe(select(selectQuickListOptions));
    this.users$ = this.store.pipe(select(selectUsers));
    this.comics$ = this.store.pipe(select(selectComics));
    this.price$ = this.store.pipe(select(selectPrice));
  }

  selectQuickList() {
    const role = this.comicForm.get('quicklist').value.value;
    this.store.dispatch(new FetchUsers({ role }));
  }

  selectUser() {
    const userId = this.comicForm.get('user').value.id;
    this.store.dispatch(new FetchComics({ userId }));
  }

  selectComic() {
    const price = this.comicForm.get('comic').value.price;
    this.store.dispatch(new SetPrice({ price }));
  }

  submit() {

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
    this.store.dispatch(new ClearFormOptions());
  }

}
