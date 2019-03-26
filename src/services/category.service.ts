import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    categoryName: new FormControl('')
  });
}
