import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { v4 as uuidv4 } from 'uuid';

import {
  GetFilterCategoriesForViewGQL,
 GetFilterCategoriesForViewQueryVariables,
 UpdateOneFoodCategoryGQL, UpdateOneFoodCategoryInput,
} from 'apps/arabic-mandi/src/generate-types';
import { CreateOneFoodCategoryGQL, CreateOneFoodCategoryInput, GetItemEntitiesGQL, GetItemEntitiesQueryVariables } from "apps/arabic-mandi/src/generate-types";
import { catchError, map, of, Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class CategoryService {
  constructor(
    private _getItemEntitiesGQL: GetItemEntitiesGQL,
    private createOneCategory: CreateOneFoodCategoryGQL,
    private UpdateOneFoodCategoryGQL: UpdateOneFoodCategoryGQL,
    private _getFilterCategoriesForView: GetFilterCategoriesForViewGQL,
    
    private _snackBar: MatSnackBar,
  ) { }
 
  find(variables: GetItemEntitiesQueryVariables) {
    return this._getItemEntitiesGQL.watch(variables).valueChanges.pipe(
      catchError(() => {
        return of({ data: null });
      })
    );
  }

  getFilterCategorys(variables: GetFilterCategoriesForViewQueryVariables){
    return this._getFilterCategoriesForView.watch(variables).valueChanges.pipe(
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

  updateSingleCategory(variables: UpdateOneFoodCategoryInput): Observable<any>{
    return this.UpdateOneFoodCategoryGQL.mutate({
      input: variables
    }).pipe(map(({ data }) => data)); 
  }

  encodeId(id: any): string {
    return btoa(String(id));
  }
  decodeId(encodedId: string): number {
    // Decode the Base64 string and parse it as a number
    return parseInt(atob(encodedId), 10);
  }
}
