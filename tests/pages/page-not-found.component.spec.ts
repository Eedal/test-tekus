import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundComponent } from '../../src/app/pages/page-not-found/page-not-found.component';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should render page-not-found works!', () => {
    const title = fixture.nativeElement.querySelector('p');
    expect(title.textContent).toContain('page-not-found works!')
  })
});
