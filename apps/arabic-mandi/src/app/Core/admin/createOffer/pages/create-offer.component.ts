import { ChangeDetectionStrategy, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";

@Component({
    selector: 'food-create-offer',
    templateUrl: './create-offer.component.html',
    changeDetection: ChangeDetectionStrategy.Default,
  })
  export class CreateOfferComponent implements OnInit, OnChanges, OnDestroy {
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    ngOnChanges(changes: SimpleChanges): void {
        throw new Error("Method not implemented.");
    }
    ngOnDestroy(): void {
        throw new Error("Method not implemented.");
    }
}