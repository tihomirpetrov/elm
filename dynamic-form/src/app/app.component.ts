import { Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { FieldConfig } from './field.interface';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(DynamicFormComponent, {read: false, static: true}) form: DynamicFormComponent;
  regConfig: FieldConfig[] = [
    {
      type: 'input',
      label: 'Username',
      inputType: 'text',
      name: 'username',
      value: '',
      required: true,
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Username Required'
        },
      ]
    },
    {
      type: 'input',
      label: 'Password',
      inputType: 'password',
      name: 'password',
      value: '',
      required: true,
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Password Required'
        }
      ]
    },
    {
      type: 'input',
      label: 'Email',
      inputType: 'email',
      name: 'email',
      value: '',
      required: false,
      validations: [
        {
          name: 'pattern',
          validator: Validators.pattern(
            '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'
          ),
          message: 'Invalid email'
        }
      ]
    },
    {
      type: 'select',
      label: 'Country',
      name: 'country',
      value: 'us',
      required: true,
      options: [
        {key: 'bg', label: 'Bulgaria'},
        {key: 'us', label: 'USA'}
        ]
    },
    {
      type: 'radiobutton',
      label: 'Gender',
      name: 'gender',
      value: 'm',
      required: true,
      options: [
        {key: 'm', label: 'Male'},
        {key: 'f', label: 'Female'}],
    },
    {
      type: 'checkbox',
      label: 'Hobby',
      name: 'hobby',
      required: true,
      value: false,
      options: [
        {key: 'f', label: 'Fishing'},
        {key: 'c', label: 'Cooking'},
        {key: 'o', label: 'Other'},
        {key: 'n', label: 'No hobby'}
      ]
    },
    {
      type: 'button',
      label: 'Save'
    }
  ];

  submit(value: any) {}
}
