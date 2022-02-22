import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface DataTableItem {
  nombreProy: string;
  estado: string;
  resultado: string;
  fechaIni: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DataTableItem[] = [
  {nombreProy: 'Proyecto 1', estado: 'Postula', resultado: 'Adjudicado', fechaIni: '15-05-2005'},
  {nombreProy: 'Proyecto 2', estado: 'Postula', resultado: 'Adjudicado', fechaIni:'15/05/2005'},
  {nombreProy: 'Proyecto 3', estado: 'Postula', resultado: 'Adjudicado', fechaIni:'15/05/2005'},
  {nombreProy: 'Proyecto 4', estado: 'Exploración', resultado: 'Adjudicado', fechaIni:'15/05/2005'},
  {nombreProy: 'Proyecto 5', estado: 'Postula', resultado: 'Adjudicado', fechaIni:'15/05/2005'},
  {nombreProy: 'Proyecto 6', estado: 'Exploración', resultado: 'Adjudicado', fechaIni:'15/05/2005'},
  {nombreProy: 'Proyecto 7', estado: 'Postula', resultado: 'Adjudicado', fechaIni:'15/05/2005'},
  {nombreProy: 'Proyecto 8', estado: 'Exploración', resultado: 'Adjudicado', fechaIni:'15/05/2005'},
  {nombreProy: 'Proyecto 9', estado: 'Postula', resultado: 'Adjudicado', fechaIni:'15/05/2005'},
  {nombreProy: 'Proyecto 10', estado: 'Exploración', resultado: 'Adjudicado', fechaIni:'15/05/2005'},
  {nombreProy: 'Proyecto 11', estado: 'Postula', resultado: 'Adjudicado', fechaIni:'15/05/2005'},
  {nombreProy: 'Proyecto 12', estado: 'Exploración', resultado: 'Adjudicado', fechaIni:'15/05/2005'},
  {nombreProy: 'Proyecto 13', estado: 'Postula', resultado: 'Adjudicado', fechaIni:'15/05/2005'},
  {nombreProy: 'Proyecto 14', estado: 'Exploración', resultado: 'Adjudicado', fechaIni:'15/05/2005'},
  {nombreProy: 'Proyecto 15', estado: 'Postula', resultado: 'Adjudicado', fechaIni:'15/05/2005'},
  {nombreProy: 'Proyecto 16', estado: 'Exploración', resultado: 'Adjudicado', fechaIni:'15/05/2005'},
  {nombreProy: 'Proyecto 17', estado: 'Postula', resultado: 'Adjudicado', fechaIni:'15/05/2005'},
  {nombreProy: 'Proyecto 18', estado: 'Exploración', resultado: 'Adjudicado', fechaIni:'15/05/2005'},
  {nombreProy: 'Proyecto 19', estado: 'Postula', resultado: 'Adjudicado', fechaIni:'15/05/2005'},
  {nombreProy: 'Proyecto 20', estado: 'Exploración', resultado: 'Adjudicado', fechaIni:'15/05/2005'},
];

/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataTableDataSource extends DataSource<DataTableItem> {
  data: DataTableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<DataTableItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: DataTableItem[]): DataTableItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: DataTableItem[]): DataTableItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'estado': return compare(a.estado, b.estado, isAsc);
        case 'nombreProy': return compare(+a.nombreProy, +b.nombreProy, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
