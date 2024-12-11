import {Input, NgModule} from "@angular/core";
import { Routes } from "@angular/router";
import {
  CardsManagementJourneyModule,
  CardsManagementJourneyConfiguration,
  CardsManagementJourneyConfigurationToken,
  CardDetailViewComponent,
  CardsManagementTravelNoticeGuard,
  CardsTravelNoticeViewComponent,
  CardsOverviewFeatureModule,
  CardsService,
  CardsBackendService,
  CardsSelfServiceAdditionalDetailsContext,
} from "@backbase/cards-management-journey-ang";
import { CustomCardsManagementJourneyComponent } from "./custom-cards-management-journey/custom-cards-management-journey.component";
import { CustomCardDetailsSelfServiceTopComponent } from "./custom-card-details-self-service-top/custom-card-details-self-service-top.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

export const customizedRoutes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: CustomCardsManagementJourneyComponent,
  },
  {
    path: 'details',
    component: CardDetailViewComponent,
  },
  {
    path: 'travel-notice',
    component: CardsTravelNoticeViewComponent,
    canActivate: [CardsManagementTravelNoticeGuard],
  },
];

@NgModule({
imports: [
  CardsManagementJourneyModule.forRoot({
    routes : customizedRoutes,
    extensionSlots : {cardDetailsSelfServiceTop : CustomCardDetailsSelfServiceTopComponent}
  }),
  CommonModule,
  CardsOverviewFeatureModule,
  ReactiveFormsModule
  
],
  providers: [
    {
      provide: CardsManagementJourneyConfigurationToken,
      useValue: <Partial<CardsManagementJourneyConfiguration>>{
        notificationTtl: 5000,
        groupByPaymentCardTypes: '',
        enableTravelNotice: false,
      },
    },
    CardsService,
    CardsBackendService
  ],
  declarations : [CustomCardsManagementJourneyComponent, CustomCardDetailsSelfServiceTopComponent ]
})
export class CardsManagementBundleModule {
}
