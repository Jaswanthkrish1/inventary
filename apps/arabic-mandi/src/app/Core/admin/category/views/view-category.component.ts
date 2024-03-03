import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MaterialModule } from "../../../material.module";
import { CoreModule } from "@angular/flex-layout";
import { AdminCategoryService } from "../category.service";
import { BehaviorSubject, Subscription, debounce, debounceTime, from, switchMap } from "rxjs";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog } from "@angular/material/dialog";
import { UpdateCategoryComponentDialog } from "../components/update-category-dialog.component";
import { MatSnackBar } from "@angular/material/snack-bar";
import { CreateCategoryComponentDialog } from "../components/create-category-dialog.component";
import { AdminCommonService } from "../../adminCommonsService.service";
import { GetFoodCategoriesQueryVariables, UpdateOneFoodCategoryMutationVariables } from "../../generate-admin-types";

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
    public displayedColumns: string[] = ['status', 'view', 'image', 'name', 'actions'];
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
        private _snackbar: MatSnackBar,
        private _commonService: AdminCommonService
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
    onViewStatusChange(event: any, element: any) {
        if (event.checked) {
            const data: UpdateOneFoodCategoryMutationVariables = {
                input: {
                    id: element.id,
                    update: {
                        clientView: true
                    }
                }
            }
            this._adminCategoryService.updateOneCategory(data).subscribe(status => {
                this._snackbar.open("Catgeory Items is Activated from live")
            })
            // Trigger your method or perform any other action
        } else {
            const data: UpdateOneFoodCategoryMutationVariables = {
                input: {
                    id: element.id,
                    update: {
                        clientView: false
                    }
                }
            }
            this._adminCategoryService.updateOneCategory(data).subscribe(status => {
                this._snackbar.open("Catgeory Items Removed from live ")
            })
        }
    }
    openDailog() {
        const ref_dailog = this._dialog.open(CreateCategoryComponentDialog);
        ref_dailog.afterClosed().subscribe((v) => {
            if (v) {
                setTimeout(() => {
                    this.getAllCategory()
                    setTimeout(() => {
                        this._commonService.reloadComponent();
                    }, 1000)
                }, 1000)
            }
        })
    }

}