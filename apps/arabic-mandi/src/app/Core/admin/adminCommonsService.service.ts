import { Injectable } from "@angular/core";
import { UserInput } from "apps/arabic-mandi/src/generate-types";
import { AuthenticateService } from "../authentication/authentication.service";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable ({ providedIn: 'root' })
export class CommonService {
    constructor(private _auth: AuthenticateService ){
 }

 private dataSubject = new BehaviorSubject<any>(null);
public data$ = this.dataSubject.asObservable();

 getCurrentUser(): UserInput | null {
  const user = localStorage.getItem(this._auth.CURRENT_USER_KEY);
  if (user) {
    const currentUser = JSON.parse(user);
    const userService: UserInput = {
      id: currentUser.id,
    };
    return userService;
  }
  return null;
}

setData(data: any): void {
  this.dataSubject.next(data);
}

}
