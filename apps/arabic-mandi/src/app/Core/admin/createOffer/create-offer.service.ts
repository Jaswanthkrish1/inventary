import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Observable } from "@apollo/client/utilities";

import { catchError, of } from "rxjs";
import { CreateManyOfferGQL, CreateManyOffersInput, GetAlloffersGQL, GetAlloffersQueryVariables, GetItemEntitiesGQL, GetItemEntitiesQueryVariables, UpdateOneOfferGQL, UpdateOneOfferMutationVariables } from "../generate-admin-types";

@Injectable({ providedIn: 'root' })
export class CreateOfferService {
  constructor(
    private GetItemEntitiesGQL: GetItemEntitiesGQL,
    private CreateManyOfferGQL: CreateManyOfferGQL,
    private GetAlloffersGQL: GetAlloffersGQL,
    private UpdateOneOfferGQL: UpdateOneOfferGQL,
    private _snackBar: MatSnackBar,
    private _router: Router

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
  updateOneOffer(variables: UpdateOneOfferMutationVariables): Observable<boolean> {
    return new Observable<boolean>(observer => {
      const snackBarRef = this._snackBar;
      this.UpdateOneOfferGQL.mutate(variables).subscribe(
        ({ data }) => {
          if (data) {
            snackBarRef.open("Offer Updated");
            observer.next(true);
            observer.complete();
          }
        },
        (error) => {
          observer.next(false);
          observer.complete();
          this._snackBar.open("Having some error" + error);
        }
      );
    });
  }

  AddAllOffers(variables: CreateManyOffersInput) {
    this.CreateManyOfferGQL.mutate({
      input: variables
    }).subscribe(
      ({ data }) => {
        if (data) {
          this._snackBar.open("Offers has been added")
          this._router.navigate(['/admin/offer/View_Offers'])
        }
        // Handle success, 'data' contains the response from the server
      },
      (error) => {
        this._snackBar.open("Haveing some error" + error)
        // Handle error
        // console.error('Error updating items:', error);
      }
    );
  }

}
