import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { TableComponent } from '../components/table/table.component';
import { ChangesHistoryComponent } from '../components/modals/changes-history/changes-history.component';

@Component({
  selector: 'app-ev-eco',
  templateUrl: './ev-eco.component.html',
  styleUrls: ['./ev-eco.component.css']
})
export class EvEcoComponent implements OnInit {

  constructor( public modalService: NgbModal ) { }

  ngOnInit(): void {
  }

  openChangesHistoryModal(): void{
    this.modalService.open(ChangesHistoryComponent,{centered: true, size: 'lg'});
  }

  entryTableData = [
    {header: "Ingreso Total"},
    {header: "Año"},
    {header: "Mes 0"},
    {header: "Mes 1"},
    {header: "Mes 2"}
  ];

  expensesTableData = [
    {header: "Gasto total"},
    {header: "Año"},
    {header: "Mes 0"},
    {header: "Mes 1"},
    {header: "Mes 2"}
  ];

}
