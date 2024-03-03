import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable, catchError, map, of } from "rxjs";
import { GetFoodCategoriesGQL, UpdateOneFoodCategoryGQL, GetFoodCategoriesQueryVariables, UpdateOneFoodCategoryMutationVariables, UpdateOneFoodCategoryInput, CreateOneFoodCategoryGQL } from "../generate-admin-types";
import { CreateOneFoodCategoryInput } from "../generate-admin-types";

@Injectable({ providedIn: 'root' })
export class AdminCategoryService {
  constructor(
    private _getFoodCategoriesGQL: GetFoodCategoriesGQL,
    private _snackBar: MatSnackBar,
    private createOneCategory: CreateOneFoodCategoryGQL,
    private _updateOneFoodCategoryGQL: UpdateOneFoodCategoryGQL
  ) { }

  find(variable: GetFoodCategoriesQueryVariables) {
    return this._getFoodCategoriesGQL.watch(variable).valueChanges.pipe(
      catchError(() => {
        return of({ data: null });
      })
    )
  }
  updateOneCategory(variables: UpdateOneFoodCategoryMutationVariables): Observable<boolean> {
    return new Observable<boolean>(observer => {
      const snackBarRef = this._snackBar;
      this._updateOneFoodCategoryGQL.mutate(variables).subscribe(
        ({ data }) => {
          if (data) {
            snackBarRef.open("Category Updated");
            observer.next(true);
            observer.complete();
          }
        },
        (error) => {
          this._snackBar.open("Having some error" + error);
          observer.next(false);
          observer.complete();
        }
      );
    });
  }

  addSingleCategory(input: CreateOneFoodCategoryInput): Observable<any> {
    return this.createOneCategory
      .mutate({ input })
      .pipe(map(({ data }) => data));
  }
  updateSingleCategory(variables: UpdateOneFoodCategoryInput): Observable<any> {
    return this._updateOneFoodCategoryGQL.mutate({
      input: variables
    }).pipe(map(({ data }) => data));
  }
}
