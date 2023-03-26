import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  Observable,
  switchMap,
} from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Country } from 'src/app/interfaces/country.interface';
import { CountryService } from 'src/app/services/country.service';
import { SubscriberService } from 'src/app/services/subscriber.service';
import { SubscriberModalComponent } from '../subscriber-modal/subscriber-modal.component';
import { ActivatedRoute, Router } from '@angular/router';

const numberValidator = (control: FormControl) => {
  const value = control.value;
  const isNumber = /^\d+$/.test(value);
  return isNumber ? null : { notNumber: true };
};

@Component({
  selector: 'app-subscriber-form',
  templateUrl: './subscriber-form.component.html',
  styleUrls: ['./subscriber-form.component.css'],
})
export class SubscriberFormComponent {
  subscriberForm: FormGroup = this.formBuilder.group({
    Name: ['', Validators.required],
    Email: ['', [Validators.required, Validators.email]],
    CountryCode: ['', Validators.required],
    PhoneNumber: ['', numberValidator],
    JobTitle: [''],
    Area: [''],
    Topics: [[]],
  });

  countries$!: Observable<Country[]>;
  subscriberId!: string;
  isEdit = false;

  topics = ['Topic 1', 'Topic 2', 'Topic 3'];

  constructor(
    private formBuilder: FormBuilder,
    private countryService: CountryService,
    private subscriberService: SubscriberService,
    private dialog: MatDialog,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.countries$ = this.subscriberForm.get('CountryCode')!.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(200),
      filter((name) => !!name),
      switchMap((name) => this.countryService.getCountries(name))
    );
  }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('id');
      if (id) {
        this.subscriberId = id;
        console.log(this.subscriberId);
      }
    });
    if (this.subscriberId != undefined) {
      this.isEdit = true;
      this.subscriberService
        .getById(this.subscriberId)
        .subscribe((subscriber) => {
          this.subscriberForm.patchValue(subscriber);
        });
    }
  }

  save() {
    this.subscriberService
      .createSubscribers({
        Subscribers: [this.subscriberForm.value],
      })
      .subscribe((response) => {
        if (response.length > 0) {
          this.dialog.open(SubscriberModalComponent);
          return;
        }
        this.router.navigate(['/subscribers']);
      });
  }
  edit() {
    this.subscriberService
      .edit(
        {
          Id: this.subscriberId,
          ...this.subscriberForm.value,
        },
        this.subscriberId
      )
      .subscribe((res) => {
        this.router.navigate(['/subscribers']);
      });
  }

  onSubmit() {
    if (this.subscriberForm.invalid) {
      return Object.values(this.subscriberForm.controls).forEach((control) =>
        control.markAsTouched()
      );
    }

    if (this.isEdit) {
      this.edit();
      return;
    }

    this.save();
  }

  get isNameInvalid() {
    return (
      this.subscriberForm.get('Name')?.invalid &&
      this.subscriberForm.get('Name')?.touched
    );
  }

  get isEmailInvalid() {
    return (
      this.subscriberForm.get('Email')?.invalid &&
      this.subscriberForm.get('Email')?.touched
    );
  }
}
