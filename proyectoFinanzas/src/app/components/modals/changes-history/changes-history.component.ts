import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { TableComponent } from '../../table/table.component';


@Component({
  selector: 'app-changes-history',
  templateUrl: './changes-history.component.html',
  styleUrls: ['./changes-history.component.css']
})
export class ChangesHistoryComponent implements OnInit {

  constructor( public activeModal: NgbActiveModal ) { }

  ngOnInit() {
  }
  //ToDo: change any format to a interface.
  colData = [
    {header: "Categoría"},
    {header: "Modificador"},
    {header: "Cargo"},
    {header: "Modificación"},
    {header: "Última modificación"}
  ];

}
