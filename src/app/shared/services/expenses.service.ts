import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  private expensesUrl = "http://localhost:3000/expenses"

  constructor(private http: HttpClient) {}

  get getExpenses(): Observable<any> {
    return this.http.get(this.expensesUrl)
  }

}
