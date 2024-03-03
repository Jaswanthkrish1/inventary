import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

import { UpdateOneFoodCategoryClientGQL, UpdateOneFoodCategoryInput, GetFoodCategoriesClientQueryVariables, GetFoodCategoriesClientGQL, UserInput, GetItemEntitiesClientViewGQL } from '../generate-client-types';
import { GetItemEntitiesClientGQL, GetItemEntitiesClientQueryVariables } from "../generate-client-types";
import { catchError, map, of, Observable } from "rxjs";
import { AuthenticateService } from "../../authentication/authentication.service";

@Injectable({ providedIn: 'root' })
export class CategoryService {
  constructor(
    private _getItemEntitiesClientGQL: GetItemEntitiesClientGQL,
    private _getItemEntitiesClientViewGQL: GetItemEntitiesClientViewGQL,
    private getFoodCategoriesGql: GetFoodCategoriesClientGQL,
    private _updateOneFoodCategoryClientGQL: UpdateOneFoodCategoryClientGQL,
    private _auth: AuthenticateService,
    private _snackBar: MatSnackBar,
  ) { }

  find(variables: GetItemEntitiesClientQueryVariables) {
    return this._getItemEntitiesClientGQL.watch(variables).valueChanges.pipe(
      catchError(() => {
        return of({ data: null });
      })
    );
  }
  findItemForView(variables: GetItemEntitiesClientQueryVariables) {
    return this._getItemEntitiesClientViewGQL.watch(variables).valueChanges.pipe(
      catchError(() => {
        return of({ data: null });
      })
    );
  }

  FoodCategoryfind(variables: GetFoodCategoriesClientQueryVariables) {
    return this.getFoodCategoriesGql.watch(variables).valueChanges.pipe(
      catchError(() => {
        return of({ data: null });
      })
    );
  }


  updateSingleCategory(variables: UpdateOneFoodCategoryInput): Observable<any> {
    return this._updateOneFoodCategoryClientGQL.mutate({
      input: variables
    }).pipe(map(({ data }) => data));
  }

  // get user
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

  encodeId(id: any): string {
    return btoa(String(id));
  }
  decodeId(encodedId: string): number {
    // Decode the Base64 string and parse it as a number
    return parseInt(atob(encodedId), 10);
  }
}
