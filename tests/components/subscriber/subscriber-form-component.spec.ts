import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryService } from 'src/app/services/country.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { SubscriberService } from 'src/app/services/subscriber.service';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { SubscriberFormComponent } from 'src/app/components/subscriber/subscriber-form/subscriber-form.component';

class dialogMock {
  open() {
    return {
      afterClosed: () => of({}),
    };
  }
}

describe('SubscriberFormComponent', () => {
  let component: SubscriberFormComponent;
  let fixture: ComponentFixture<SubscriberFormComponent>;
  let router: Router;
  let countryService: CountryService;
  let subscriberService: SubscriberService;
  let dialog: MatDialog;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        CountryService,
        { provide: MatDialog, useValue: new dialogMock() },
      ],
      declarations: [SubscriberFormComponent, MatAutocomplete],
      imports: [
        HttpClientTestingModule,
        MatDialogModule,
        RouterTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SubscriberFormComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    countryService = TestBed.inject(CountryService);
    subscriberService = TestBed.inject(SubscriberService);
    dialog = TestBed.inject(MatDialog);
    activatedRoute = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('save  success', () => {
    jest
      .spyOn(subscriberService, 'createSubscribers')
      .mockReturnValueOnce(of([]));

    component.subscriberForm.patchValue({
      Name: 'Suscriptor 1',
      Email: 's1@tekus.co',
      CountryCode: 'CO',
      PhoneNumber: '',
      JobTitle: '',
      Area: '',
      Topics: [],
    });

    const navigateSpy = jest.spyOn(router, 'navigate');
    component.save();

    expect(navigateSpy).toHaveBeenCalledWith(['/subscribers']);
  });

  it('save  fail', () => {
    jest.spyOn(subscriberService, 'createSubscribers').mockReturnValueOnce(
      of([
        {
          Name: 'Suscriptor 131',
          Email: 'ss1@tekus.co',
          PhoneNumber: '',
          Id: 0,
        },
      ])
    );

    component.subscriberForm.patchValue({
      Name: 'Suscriptor 1',
      Email: 's1@tekus.co',
      CountryCode: 'CO',
      PhoneNumber: '',
      JobTitle: '',
      Area: '',
      Topics: [],
    });
    const spy = jest.spyOn(dialog, 'open');

    component.save();
    expect(spy).toBeCalledTimes(1);
  });

  it('edit  success', () => {
    jest.spyOn(subscriberService, 'edit').mockReturnValueOnce(of([]));

    component.subscriberId = '123';

    component.subscriberForm.patchValue({
      Name: 'Suscriptor 1',
      Email: 's1@tekus.co',
      CountryCode: 'CO',
      PhoneNumber: '',
      JobTitle: '',
      Area: '',
      Topics: [],
    });

    const navigateSpy = jest.spyOn(router, 'navigate');
    component.edit();

    expect(navigateSpy).toHaveBeenCalledWith(['/subscribers']);
  });

  it('onSubmit', () => {
    component.onSubmit();
  });

  it('onSubmit edit', () => {
    component.isEdit = true;

    component.subscriberForm.setValue({
      Name: 'Suscriptor 1',
      Email: 's1@tekus.co',
      CountryCode: 'CO',
      PhoneNumber: 987,
      JobTitle: 'dfg',
      Area: 'dfg',
      Topics: ['dfg'],
    });

    console.log(component.subscriberForm.valid);

    component.onSubmit();

    const spy = jest.spyOn(component, 'edit');
    expect(spy).toBeCalledTimes(0);
  });

  it('onSubmit save', () => {
    component.isEdit = false;

    component.subscriberForm.setValue({
      Name: 'Suscriptor 1',
      Email: 's1@tekus.co',
      CountryCode: 'CO',
      PhoneNumber: 987,
      JobTitle: 'dfg',
      Area: 'dfg',
      Topics: ['dfg'],
    });

    console.log(component.subscriberForm.valid);

    component.onSubmit();

    const spy = jest.spyOn(component, 'save');
    expect(spy).toBeCalledTimes(0);
  });
});
