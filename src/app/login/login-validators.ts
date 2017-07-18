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

  static validateId(id: string): boolean {
    let mone = 0;
    let incNum: number;
    for (let i = 0; i < 9; i++) {
      incNum = parseInt(id[i], 10);
      incNum *= (i % 2) + 1;
      if (incNum > 9) {
        incNum -= 9;
      }
      mone += incNum;
    }
    return mone % 10 === 0;
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
