import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CheckboxDirective } from './checkbox.directive';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CheckboxDirective],
  template: `
    {{eieiForm.value | json}}

    <input type="checkbox" [unCheckValue]="'N'" [checkValue]="'Y'"  [appCheckbox]="eieiForm.controls['check']"/>

    <button (click)="checkInput()">Change</button>
  `,
})
export class App {
  name = 'Angular';

  eieiForm = new FormGroup({
    check: new FormControl(),
  });

  checkInput() {
    this.eieiForm.controls['check'].setValue(
      this.eieiForm.controls['check'].value === 'Y' ? 'N' : 'Y'
    );
  }
}

bootstrapApplication(App);
