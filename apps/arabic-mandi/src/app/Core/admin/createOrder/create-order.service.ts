import { Injectable } from '@angular/core';
import {
  GetFoodCategoriesGQL,
  CreateItemInput,
  CreateManyItemEntitiesGQL,
  CreateManyItemEntitiesInput,
  GetFoodCategoriesQueryVariables,
  UserInput,
} from 'apps/arabic-mandi/src/generate-types';
import { catchError, of } from 'rxjs';
import { AuthenticateService } from '../../authentication/authentication.service';
@Injectable({ providedIn: 'root' })
export class CreateOrderService {
  constructor(
    private getFoodCategoriesGql: GetFoodCategoriesGQL,
    private CreateManyItemEntitiesGQL: CreateManyItemEntitiesGQL,
    private _auth: AuthenticateService
  ) {}

  find(variables: GetFoodCategoriesQueryVariables) {
    return this.getFoodCategoriesGql.watch(variables).valueChanges.pipe(
      catchError(() => {
        return of({ data: null });
      })
    );
  }

  updateManyItems(manyUserInput: CreateItemInput[]) {
    const manyItemInput: CreateManyItemEntitiesInput = {
      itemEntities: manyUserInput,
    };
    console.log(manyItemInput);
    this.CreateManyItemEntitiesGQL.mutate({
      input: manyItemInput,
    }).subscribe(
      ({ data }) => {
        // Handle success, 'data' contains the response from the server
        console.log('Updated items:', data);
      },
      (error) => {
        // Handle error
        console.error('Error updating items:', error);
      }
    );
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
