import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Expense} from "../models/expense";

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  private expensesUrl = "http://localhost:3000/expenses"

  constructor(private http: HttpClient) {}

  get getExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>(this.expensesUrl)
  }

}
