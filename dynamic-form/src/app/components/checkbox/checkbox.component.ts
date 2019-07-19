import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FieldConfig} from '../../field.interface';

@Component({
  selector: 'app-checkbox',
  template: `
    <div class="demo-full-width margin-top" [formGroup]="group">
      <div>{{field.label}}:</div>
      <mat-checkbox [formControlName]="field.name" *ngFor="let hobby of field.options" [value]="hobby.label">
        {{hobby.label}}</mat-checkbox>
    </div>`,
  styles: []
})
export class CheckboxComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }
}
