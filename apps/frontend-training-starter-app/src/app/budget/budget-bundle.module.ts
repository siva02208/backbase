import {NgModule} from "@angular/core";
import {
    BudgetJourneyModule,
    BudgetJourneyConfiguration, 
    BudgetJourneyConfigurationToken, 
} from "@backbase/budget-journey-ang";
@NgModule({
    imports: [
        BudgetJourneyModule.forRoot()
    ],
    providers: [
        {
            provide: BudgetJourneyConfigurationToken,
            useValue: <Partial<BudgetJourneyConfiguration>>{
                showPercentage: true, 
                budgetSafeZoneLimit: 80,
                notificationDismissTime: 5,
                maxBudgets: undefined,
            },
        },
    ]
})
export class BudgetJourneyBundleModule {

}