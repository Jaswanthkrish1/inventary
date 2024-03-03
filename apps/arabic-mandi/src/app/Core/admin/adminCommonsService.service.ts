import { Injectable } from "@angular/core";
import { UserInput } from "../admin/generate-admin-types";
import { AuthenticateService } from "../authentication/authentication.service";
import { BehaviorSubject, Subject } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";

@Injectable ({ providedIn: 'root' })
export class AdminCommonService {
    constructor(private _auth: AuthenticateService,private router: Router, private route: ActivatedRoute ){
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

 reloadComponent(): void {
  const currentUrl = this.router.url;
  this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    this.router.navigate([currentUrl]);
  });
}

}
