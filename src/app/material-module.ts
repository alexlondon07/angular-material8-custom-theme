import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatTabsModule, MatSidenavModule, MatToolbarModule, MatButtonModule, MatListModule, MatMenuModule,
  MatTableModule, MatSortModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatProgressBarModule, MatCheckboxModule,
  MatProgressSpinnerModule, MatCardModule, MatSelectModule, MatExpansionModule, MatDatepickerModule, MatNativeDateModule,
  MatDialogModule, MatSlideToggleModule, MatTooltipModule, MatSnackBarModule,
  MatDividerModule, MatAutocompleteModule, MatButtonToggleModule, MatGridListModule,
  MatRadioModule, MatSliderModule
} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import { A11yModule } from '@angular/cdk/a11y';
import { BidiModule } from '@angular/cdk/bidi';
import { ObserversModule } from '@angular/cdk/observers';
import { OverlayModule } from '@angular/cdk/overlay';
import { PlatformModule } from '@angular/cdk/platform';
import { PortalModule } from '@angular/cdk/portal';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  imports: [
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatRadioModule,
    MatSliderModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatSelectModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    CommonModule,
    MatTabsModule,
    MatSidenavModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatSnackBarModule,
  ],
  exports: [
    // CDK
    A11yModule,
    BidiModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
    CdkStepperModule,
    CdkTableModule,


    // Material
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatRadioModule,
    MatSliderModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatSelectModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    CommonModule,
    MatTabsModule,
    MatSidenavModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatSnackBarModule,
  ],
  declarations: []
})
export class MaterialModule { }
