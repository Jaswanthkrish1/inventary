import { Injectable } from "@angular/core";

import { GetItemEntitiesGQL, GetItemEntitiesQueryVariables } from "apps/arabic-mandi/src/generate-types";
import { catchError, of } from "rxjs";

@Injectable({ providedIn: 'root' })
export class CreateOfferService {
    constructor(
    private GetItemEntitiesGQL: GetItemEntitiesGQL,){
 }

  find(variables:GetItemEntitiesQueryVariables){
      return this.GetItemEntitiesGQL.watch(variables).valueChanges.pipe(
        catchError(() => {
          return of({ data: null });
        })
      );
  }
}
