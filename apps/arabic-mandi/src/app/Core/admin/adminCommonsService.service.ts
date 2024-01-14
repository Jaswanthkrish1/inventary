import { Injectable } from "@angular/core";
import { UserInput } from "apps/arabic-mandi/src/generate-types";
import { AuthenticateService } from "../authentication/authentication.service";

@Injectable ({ providedIn: 'root' })
export class CommonService {
    constructor(private _auth: AuthenticateService ){
 }

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
}
