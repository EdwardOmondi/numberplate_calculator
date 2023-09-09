import { Component } from '@angular/core';
import { FormBuilder, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private fb: FormBuilder) { }
  singleNumberplateForm = this.fb.group({
    numberplate: ['', [
      Validators.required,
      Validators.pattern("[Kk][A-Za-z]{2}[0-9]{3}[A-Za-z]"),
    ]]
  });
  totalSold: number = 0;
  numberplate: string = ""
  singlePlateSubmit() {
    this.numberplate = this.singleNumberplateForm.value.numberplate!.toUpperCase().replace(/ /g, "").substring(0, 6)
    const firstLetter = this.numberplate.charCodeAt(1) - "A".charCodeAt(0) + 1
    const secondLetter = this.numberplate.charCodeAt(2) - "A".charCodeAt(0) + 1
    const lastLetter = this.numberplate.charCodeAt(6) - "A".charCodeAt(0) + 1
    const numbers = parseInt(this.numberplate.substring(3, 6))

    let runningtotal = 0
    if (firstLetter > 1) {
      runningtotal = 999 * 26 * 26 * (firstLetter - 1) + runningtotal;
    }
    if (secondLetter > 1) {
      runningtotal = 999 * 26 * (secondLetter - 1) + runningtotal;
    }
    if (lastLetter > 1) {
      runningtotal = 999 * (lastLetter - 1) + runningtotal;
    }
    if (runningtotal == 0) {
      this.totalSold = numbers
    } else
      this.totalSold = numbers + runningtotal;
  }
  getErrorMessage() {
    let result = "";
    let errors = this.singleNumberplateForm.controls["numberplate"].errors as ValidationErrors;
    if (errors['required']) {
      result += ("\nNumberplate is required.");
    }
    if (errors['pattern']) {
      result += ("\n Numberplate is invalid or not Kenyan");
    }


    return result;
  }
}
