﻿import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DxButtonModule,
         DxLoadPanelModule,
         DxLoadIndicatorModule,
         DxTemplateModule } from "devextreme-angular";

import { SharedModule } from "../shared/shared.module";
import { ClubsComponent } from "./clubs.component";
import { SearchingInfoComponent } from "./searching-info/searching-info.component"
import { ClubsListComponent } from "./clubs-list/club-list.component"

@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        DxTemplateModule,
        DxLoadIndicatorModule,
        DxLoadPanelModule,
        DxButtonModule
    ],
    declarations: [
        ClubsComponent,
        SearchingInfoComponent,
        ClubsListComponent
    ],
    exports: [
        ClubsComponent,
        SearchingInfoComponent,
        ClubsListComponent
    ]
})
export class ClubsModule {
}
