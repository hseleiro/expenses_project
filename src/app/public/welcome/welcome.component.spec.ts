import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';
import {Store} from "@ngrx/store";
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {State} from "./reducers/welcome.reducer";

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  class MockStore {
    public static get welcomeStateMock(): State {
      return {
        message: 'welcome test'
      }
    }
  }

  beforeEach(async () => {



    await TestBed.configureTestingModule({
      declarations: [ WelcomeComponent ],
      providers: [
        provideMockStore(
          {initialState: MockStore}
        )
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
