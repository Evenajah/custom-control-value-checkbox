import { Directive, ElementRef, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { fromEvent } from 'rxjs';

@Directive({
  selector: '[appCheckbox]',
  standalone: true,
})
export class CheckboxDirective {
  @Input() appCheckbox: AbstractControl | undefined;

  @Input() unCheckValue: boolean | string | number = true;

  @Input() checkValue: boolean | string | number = false;

  constructor(private el: ElementRef<HTMLInputElement>) {}

  ngOnInit() {
    const element = this.el.nativeElement;

    fromEvent<Event>(element, 'change').subscribe(() => {
      const isChecked = element.checked;
      const checkedValue = isChecked ? this.checkValue : this.unCheckValue;
      this.appCheckbox?.setValue(checkedValue);
    });

    this.appCheckbox?.valueChanges.subscribe((res) => {
      element.checked = res === this.checkValue;
    });
  }

  ngOnDestroy() {}
}
