import { AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Propuesta } from '../shared/_class/propuesta';
import { DataTableDataSource, DataTableItem } from './data-table-datasource';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnChanges {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Propuesta>;
  dataSource: DataTableDataSource;
  @Input() propuestas: Propuesta[] = [];
  @Input() total: number = 0;
  @Output() changePage = new EventEmitter();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['nombrePropuesta', 'estado', 'resultado', 'FechaVenta'];

  constructor() {
    this.dataSource = new DataTableDataSource();
  }

  ngOnChanges(): void {
    // console.log(this.propuestas)
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    if(this.propuestas.length>0)
    this.table.dataSource = this.propuestas;
  }
  
  setPage(page:any){
    this.changePage.emit({page:page.pageIndex+1, perPage: page.pageSize});
  }
}
