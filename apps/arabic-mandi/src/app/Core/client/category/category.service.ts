import { Injectable } from "@angular/core";
import { GetItemEntitiesGQL, GetItemEntitiesQueryVariables } from "apps/arabic-mandi/src/generate-types";
import { catchError, of } from "rxjs";

@Injectable({ providedIn: 'root' })
export class CategoryService {
  constructor(
    private _getItemEntitiesGQL: GetItemEntitiesGQL,

  ) { }

  find(variables: GetItemEntitiesQueryVariables) {
    return this._getItemEntitiesGQL.watch(variables).valueChanges.pipe(
      catchError(() => {
        return of({ data: null });
      })
    );
  }
}
