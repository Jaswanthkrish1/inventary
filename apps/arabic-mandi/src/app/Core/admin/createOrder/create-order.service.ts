import { Injectable } from '@angular/core';
import {
  GetFoodCategoriesGQL,
  CreateItemInput,
  CreateManyItemEntitiesGQL,
  CreateManyItemEntitiesInput,
  GetFoodCategoriesQueryVariables,
  UserInput,
  CreateOneFoodCategoryGQL,
  CreateOneFoodCategoryInput,
  UpdateItemEntityGQL,
  UpdateOneItemEntityInput,
  DeleteOneItemEntityGQL,
  DeleteOneItemEntityInput,
  FoodTypesQueryVariables,
  FoodTypesGQL,
  FoodSizesGQL,
  FoodSizesQueryVariables,
  GetItemEntitiesQueryVariables,
  GetItemEntitiesGQL,
  GetAllItemEntitiesQueryVariables,
  GetAllItemEntitiesGQL,
  

} from 'apps/arabic-mandi/src/generate-types';
import { Observable, catchError, map, of } from 'rxjs';
import { AuthenticateService } from '../../authentication/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class CreateOrderService {
  constructor(
    private getFoodCategoriesGql: GetFoodCategoriesGQL,
    private CreateManyItemEntitiesGQL: CreateManyItemEntitiesGQL,
    private createOneCategory: CreateOneFoodCategoryGQL,
    private updateItemEntityGQL: UpdateItemEntityGQL,
    private _auth: AuthenticateService,
    private _snackBar: MatSnackBar,
    private  DeleteOneItemEntityGQL: DeleteOneItemEntityGQL,
    private FoodTypesGQL: FoodTypesGQL,
    private FoodSizesGQL: FoodSizesGQL,
    private GetAllItemEntitiesGQL: GetAllItemEntitiesGQL
  ) { }
  // category quries and mutations
  find(variables: GetFoodCategoriesQueryVariables) {
    return this.getFoodCategoriesGql.watch(variables).valueChanges.pipe(
      catchError(() => {
        return of({ data: null });
      })
    );
  }

  findAllItems(variables: GetAllItemEntitiesQueryVariables) {
    return this.GetAllItemEntitiesGQL.watch(variables).valueChanges.pipe(
      catchError(() => {
        return of({ data: null });
      })
    );
  }

  findFoodType(variables: FoodTypesQueryVariables) {
    return this.FoodTypesGQL.watch(variables).valueChanges.pipe(
      catchError(() => {
        return of({ data: null });
      })
    );
  }

  findFoodSize(variables: FoodSizesQueryVariables) {
    return this.FoodSizesGQL.watch(variables).valueChanges.pipe(
      catchError(() => {
        return of({ data: null });
      })
    );
  }

  addSingleCategory(input: CreateOneFoodCategoryInput): Observable<any> {
    return this.createOneCategory
      .mutate({ input })
      .pipe(map(({ data }) => data));
  }

  // Item or order Querys and mutations

  updateManyItems(manyUserInput: CreateItemInput[]) {
    const manyItemInput: CreateManyItemEntitiesInput = {
      itemEntities: manyUserInput,
    };
    this.CreateManyItemEntitiesGQL.mutate({
      input: manyItemInput,
    }).subscribe(
      ({ data }) => {
        this._snackBar.open("Items has been added")
        // Handle success, 'data' contains the response from the server
      },
      (error) => {
        // Handle error
        // console.error('Error updating items:', error);
      }
    );
  }
  updateSingleItem(updateSingleItemInput: UpdateOneItemEntityInput): boolean {
    let res: boolean = true;
    this.updateItemEntityGQL.mutate({
      input: updateSingleItemInput
    }).subscribe(data => {
      if(data){
        this._snackBar.open("Item is updated")
        res = true;
      }
    }, (error) =>{
      this._snackBar.open(error)
      res = false
    })
    return res;
  }

  removeSingleItem(item:DeleteOneItemEntityInput): boolean{
  let res = true;
   this.DeleteOneItemEntityGQL.mutate({
    input:item
   }).subscribe((r:any) => {
    if(r.id === undefined ){
      res = true;
      this._snackBar.open("Item Deleted ", "OK");
      location.reload();
    }
   },(error)=>{
    res =false;
    this._snackBar.open("Could not delete Item", "OK");
   })
   return res
  }




  // Auth check user is admin or not and user is exited in database or not
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
