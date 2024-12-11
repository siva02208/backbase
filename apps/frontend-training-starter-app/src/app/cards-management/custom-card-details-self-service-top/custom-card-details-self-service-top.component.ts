import { Component, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardsSelfServiceAdditionalDetailsContext, CardsServiceTopAdditionalDetailsComponent, PaymentCard } 
from '@backbase/cards-management-journey-ang';

@Component({
  selector: 'bb-custom-card-details-self-service-top',
  templateUrl: './custom-card-details-self-service-top.component.html',
  styleUrls: ['./custom-card-details-self-service-top.component.scss'],
})
export class CustomCardDetailsSelfServiceTopComponent implements CardsServiceTopAdditionalDetailsComponent
{
  @Input()
  context: CardsSelfServiceAdditionalDetailsContext | undefined;
  // c@ontext of the ViewExtension (typeof PaymentCard)

  public readonly cardRenameForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.cardRenameForm = this.formBuilder.group({
      cardName: ['', Validators.required],
    });
  }

  rename() {
    if (this.cardRenameForm.valid) {
      // Implement your rename logic here
      console.log('Renaming to:', this.cardRenameForm.value.cardName);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnDestroy(): void {}

  ngOnInit(): void {
    console.log("this siva",this.context)
    this.cardRenameForm.controls['cardName'].setValue(this.context?.cardName);
  }
}