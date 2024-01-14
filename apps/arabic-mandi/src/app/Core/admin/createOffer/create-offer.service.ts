import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

import { GetItemEntitiesGQL, GetItemEntitiesQueryVariables, CreateManyOfferGQL, CreateManyOffersInput, UserInput, GetAlloffersGQL, GetAlloffersQueryVariables } from "apps/arabic-mandi/src/generate-types";
import { catchError, of } from "rxjs";

@Injectable({ providedIn: 'root' })
export class CreateOfferService {
  constructor(
    private GetItemEntitiesGQL: GetItemEntitiesGQL,
    private CreateManyOfferGQL: CreateManyOfferGQL,
    private GetAlloffersGQL: GetAlloffersGQL,
    private _snackBar: MatSnackBar

  ) {
  }

  find(variables: GetItemEntitiesQueryVariables) {
    return this.GetItemEntitiesGQL.watch(variables).valueChanges.pipe(
      catchError(() => {
        return of({ data: null });
      })
    );
  }

  GetAllOffers(variables: GetAlloffersQueryVariables) {
    return this.GetAlloffersGQL.watch(variables).valueChanges.pipe(
      catchError(() => {
        return of({ data: null });
      })
    )
  }


  AddAllOffers(variables: CreateManyOffersInput) {
    this.CreateManyOfferGQL.mutate({
      input: variables
    }).subscribe(
      ({ data }) => {
        if (data) {
          this._snackBar.open("Offers has been added")
        }
        // Handle success, 'data' contains the response from the server
        // console.log('Updated items:', data);
      },
      (error) => {
        this._snackBar.open("Haveing some error" + error)
        // Handle error
        // console.error('Error updating items:', error);
      }
    );
  }
}
