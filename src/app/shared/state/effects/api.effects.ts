import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ExpensesService} from "../../services/expenses.service";
import {getExpenses, getExpensesSuccess} from "../actions/api.actions";
import {exhaustMap} from "rxjs/operators";
import {map} from "rxjs";

@Injectable()
export class ApiEffects {

  getExpenses$ = createEffect(() => this.actions$.pipe(
    ofType(getExpenses),
    exhaustMap(() => this.expensesService.getExpenses.pipe(
      map((expenses) => getExpensesSuccess(expenses)),
    ))
  ))

  constructor(private actions$: Actions, private expensesService: ExpensesService) {
  }
}
