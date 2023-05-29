import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Component } from '@angular/core';

import { AppComponent } from './app.component';

// Component stubs
@Component({ selector: 'app-message', template: '' })
class AppMessageStubComponent {
}

// Component stubs
@Component({ selector: 'mat-icon', template: '' })
class MatIconStubComponent {
}

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let store: MockStore;
  const initialState = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        AppMessageStubComponent,
        MatIconStubComponent
      ],
      providers: [
        provideMockStore({ initialState })
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'udacity-fsjd-project-3'`, () => {
    expect(app.title).toEqual('udacity-fsjd-project-3');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('udacity-fsjd-project-3 app is running!');
  // });
});
