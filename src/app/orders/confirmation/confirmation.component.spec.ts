import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ConfirmationComponent } from './confirmation.component';
import { Component } from '@angular/core';

// Component stubs
@Component({ selector: 'mat-icon', template: '' })
class MatIconStubComponent {
}

describe('ConfirmationComponent', () => {
  let component: ConfirmationComponent;
  let fixture: ComponentFixture<ConfirmationComponent>;
  let route: ActivatedRoute;
  let store: MockStore;
  const initialState = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ConfirmationComponent,
        MatIconStubComponent
      ],
      imports: [HttpClientTestingModule],
      providers:
        [
          {
            provide: ActivatedRoute,
            useValue: {
              snapshot: { paramMap: convertToParamMap({ id: '12abcde345678fg012hijk' }) }
            }
          },
          provideMockStore({ initialState })
        ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationComponent);
    route = TestBed.inject(ActivatedRoute);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
