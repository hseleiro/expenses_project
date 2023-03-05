import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { WelcomePageActions } from "../welcome/actions"
import {TranslocoService} from "@ngneat/transloco";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {saveExpense} from "./actions/welcome-page.actions";
import {Router} from "@angular/router";

type ViewModel = {
  numberOfConcerts: [{artistName: string, total: number}, {artistName: string, total: number}]
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  /* listOfConcerts: [{artistName: string, date: string}, {artistName: string, date: string}] = [
    {
      artistName: 'Trivium',
      date: '04-02-2023'
    },
    {
      artistName: 'Rammstein',
      date: '15-07-2023'
    }
  ] */

  addExpenseForm: FormGroup;

  constructor(private store: Store,
              private translocoService: TranslocoService,
              private fb: FormBuilder,
              private router: Router,
  ) {}

  ngOnInit(): void {
    this.store.dispatch(WelcomePageActions.enter())
    this.addExpenseForm = this.fb.group({
      expense: 0
    })
  }

  /* form = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  }); */

  form = new FormGroup({
    expense: new FormControl(0),
  });



  test() {
    const expenseForm = this.addExpenseForm.value;
    this.store.dispatch(saveExpense(expenseForm))
  }

  // test

  /* changeLang(lang: string) {
    this.translocoService.setActiveLang(lang);
  }

  getName(): void {
    console.log('Hugo')
  } */

  navigateTo(routeName: string): void {
    this.router.navigate([`/private/${routeName}`]);
  }
}
