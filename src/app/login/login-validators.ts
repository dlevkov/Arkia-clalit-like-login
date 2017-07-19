import { AbstractControl } from '@angular/forms';
import { isNull } from 'util';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/distinctUntilChanged';

export function passwordLegalityValidator(c: AbstractControl) {
  if (isNull(c.value)) {
    return null;
  }
  return LoginValidators.validatePassword(c.value)
    .debounceTime(1000)
    .distinctUntilChanged()
    .first();

}

export function idLegalityValidator(c: AbstractControl): { [key: string]: boolean } | null {

  if (isNull(c.value)) {
    return null;
  }
  if (LoginValidators.validateId(c.value)) {
    return null;
  }
  return { 'illegal': true };
}
export class LoginValidators {

  static validateId(idParam: string): boolean {

    let id = String(idParam).trim();

    // Pad string with zeros up to 9 digits
    id = id.length < 9 ? ('00000000' + id).slice(-9) : id;

    return Array.from(id, Number)
      .reduce((counter, digit, i) => {
        const step = digit * ((i % 2) + 1);
        return counter + (step > 9 ? step - 9 : step);
      }) % 10 === 0;


  }

  static validatePassword(password: string): Observable<{ [key: string]: boolean } | null> {
    const regex = new RegExp('/^[a-zA-Z0-9]+$/');
    return new Observable(observer => {
      if (regex.test(password)) {
        observer.next({ 'illegal': true });
      } else {
        observer.next(null);
      }
    });
  }
}
