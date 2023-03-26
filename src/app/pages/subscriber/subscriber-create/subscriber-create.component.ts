import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  Observable,
  switchMap,
} from 'rxjs';
import { SubscriberModalComponent } from 'src/app/components/subscriber/subscriber-modal/subscriber-modal.component';
import { Country } from 'src/app/interfaces/country.interface';
import { SubscriberBase } from 'src/app/interfaces/subscriber.interface';
import { CountryService } from 'src/app/services/country.service';
import { SubscriberService } from 'src/app/services/subscriber.service';

const numberValidator = (control: FormControl) => {
  const value = control.value;
  const isNumber = /^\d+$/.test(value);
  return isNumber ? null : { notNumber: true };
};

@Component({
  selector: 'app-subscriber-create',
  templateUrl: './subscriber-create.component.html',
  styleUrls: ['./subscriber-create.component.css'],
})
export class SubscriberCreateComponent {
  

  // countries$!: Observable<Country[]>;
  // topics = ['Topic 1', 'Topic 2', 'Topic 3'];

  // subscriberForm: FormGroup = this.formBuilder.group({
  //   Name: ['', Validators.required],
  //   Email: ['', [Validators.required, Validators.email]],
  //   CountryCode: ['', Validators.required],
  //   PhoneNumber: ['', numberValidator],
  //   JobTitle: [''],
  //   Area: [''],
  //   Topics: [[]],
  // });

  // constructor(
  //   private formBuilder: FormBuilder,
  //   private countryService: CountryService,
  //   private subscriberService: SubscriberService,
  //   private dialog: MatDialog,
  //   private router: Router,
  //   private activeRoute: ActivatedRoute
  // ) {
  //   this.countries$ = this.subscriberForm.get('CountryCode')!.valueChanges.pipe(
  //     distinctUntilChanged(),
  //     debounceTime(200),
  //     filter((name) => !!name),
  //     switchMap((name) => this.countryService.getCountries(name))
  //   );
  // }
  
  // save(subscribers: SubscriberBase) {
  //   this.subscriberService
  //     .createSubscribers(subscribers)
  //     .subscribe((response) => {
  //       if (response.length > 0) {
  //         this.dialog.open(SubscriberModalComponent);
  //         return;
  //       }
  //       this.router.navigate(['/subscribers']);
  //     });
  // }

  // onSubmit() {
  //   if (this.subscriberForm.invalid) {
  //     return Object.values(this.subscriberForm.controls).forEach((control) =>
  //       control.markAsTouched()
  //     );
  //   }

  //   const payload = {
  //     Subscribers: [{ ...this.subscriberForm.value }],
  //   };

  //   this.save(payload);
  // }

  // get isNameInvalid() {
  //   return (
  //     this.subscriberForm.get('Name')?.invalid &&
  //     this.subscriberForm.get('Name')?.touched
  //   );
  // }

  // get isEmailInvalid() {
  //   return (
  //     this.subscriberForm.get('Email')?.invalid &&
  //     this.subscriberForm.get('Email')?.touched
  //   );
  // }
}
