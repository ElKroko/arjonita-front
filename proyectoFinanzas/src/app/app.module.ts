import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { HomeComponent } from './home/home.component';
import { GestComComponent } from './gest-com/gest-com.component';
import { EvEcoComponent } from './ev-eco/ev-eco.component';
import { GestPagoComponent } from './gest-pago/gest-pago.component';
import { DataTableComponent } from './data-table/data-table.component';
import { MenuComponent } from './gest-com/menu/menu.component';
import { SharedService } from './shared.service';
import { AddNewProjectComponent } from './components/modals/add-new-project/add-new-project.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { TableComponent } from './components/table/table.component';
import { ChangesHistoryComponent } from './components/modals/changes-history/changes-history.component';
import { ProjectsService } from './services/projects.service';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { NgSelectModule, NgSelectConfig } from '@ng-select/ng-select';
import { faCalendarDay, faPen, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    GestComComponent,
    EvEcoComponent,
    GestPagoComponent,
    DataTableComponent,
    MenuComponent,
    AddNewProjectComponent,
    LandingPageComponent,
    TableComponent,
    ChangesHistoryComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule,
    NgSelectModule
  ],
  providers: [SharedService, ProjectsService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(
    private library: FaIconLibrary,
    private config: NgSelectConfig
    ) {
    library.addIcons(
        // faPencilAlt, faPen, faCalendarDay
      );
    this.config.notFoundText = 'No se encontrador datos';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
  }
}

