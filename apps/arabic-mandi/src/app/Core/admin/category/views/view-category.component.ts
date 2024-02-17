import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MaterialModule } from "../../../material.module";
import { CoreModule } from "@angular/flex-layout";
import { AdminCategoryService } from "../category.service";
import { BehaviorSubject, Subscription, debounce, debounceTime, switchMap } from "rxjs";
import { GetFoodCategoriesQueryVariables, UpdateFoodCategoryInput, UpdateOneFoodCategoryInput, UpdateOneFoodCategoryMutationVariables } from "apps/arabic-mandi/src/generate-types";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog } from "@angular/material/dialog";
import { UpdateCategoryComponentDialog } from "../components/update-category-dialog.component";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
    templateUrl: './view-category.component.html',
    standalone: true,
    imports: [
        CommonModule,
        MaterialModule,
        CoreModule
    ]
})
export class CategoryViewComponent implements AfterViewInit {
    private subs = new Subscription
    public displayedColumns: string[] = ['status', 'image', 'name', 'actions'];
    public dataSource!: MatTableDataSource<any>;
    @ViewChild(MatPaginator) paginator!: MatPaginator;


    private getAllCatgeoryDataSetChange$ = new BehaviorSubject(<
        GetFoodCategoriesQueryVariables
        >{
            filter: {},
            sorting: [],
            // paging: { limit: 10, offset: 0 },
        });
    constructor(
        protected _adminCategoryService: AdminCategoryService,
        private _dialog: MatDialog,
        private _snackbar: MatSnackBar
    ) { }

    ngAfterViewInit() { this.getAllCategory() }
    getAllCategory() {
        this.subs.add(
            this.getAllCatgeoryDataSetChange$.pipe(
                debounceTime(500),
                switchMap((variables) => this._adminCategoryService.find(variables))
            ).subscribe(({ data }) => {
                if (data?.foodCategories) {
                    this.dataSource = new MatTableDataSource<any>(data?.foodCategories);
                    this.dataSource.paginator = this.paginator;
                }
            })
        )
    }
    onUpdateCategoryHandler(data: any) {
        let dialogRef = this._dialog.open(UpdateCategoryComponentDialog, {
            data: data,
        });
        dialogRef.afterClosed().subscribe((r) => {
            if (r) {
                setTimeout(() => {
                    this.getAllCategory()
                }, 1000);
            }
        });
    }
    onStatusChange(event: any, element: any) {
        if (event.checked) {
            const data: UpdateOneFoodCategoryMutationVariables = {
                input: {
                    id: element.id,
                    update: {
                        isActive: true
                    }
                }
            }
            this._adminCategoryService.updateOneCategory(data).subscribe(status => {
                this._snackbar.open("Category Is Active Now")
            })
            // Trigger your method or perform any other action
        } else {
            const data: UpdateOneFoodCategoryMutationVariables = {
                input: {
                    id: element.id,
                    update: {
                        isActive: false
                    }
                }
            }
            this._adminCategoryService.updateOneCategory(data).subscribe(status => {
                this._snackbar.open("Category Is Not Active")
            })
        }
    }
}