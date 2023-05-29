import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { ProductItemDetailComponent } from './product-item-detail.component';

describe('ProductItemDetailComponent', () => {
  let component: ProductItemDetailComponent;
  let fixture: ComponentFixture<ProductItemDetailComponent>;
  let route: ActivatedRoute;
  let store: MockStore;
  const initialState = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductItemDetailComponent],
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
    fixture = TestBed.createComponent(ProductItemDetailComponent);
    route = TestBed.inject(ActivatedRoute);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
