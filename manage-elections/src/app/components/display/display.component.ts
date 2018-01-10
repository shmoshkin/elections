// Angular
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
import {SelectionModel} from '@angular/cdk/collections';

// Rxjs
import {Observable} from 'rxjs/Observable';

// Models
import {Selector} from '../../models/Selector.model';

// Services
import {CrudService} from '../../services/crud-service/crud.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
 
  dataSource = new MatTableDataSource([]);
  displayedColumns = ['name', 'email', 'phone', 'company'];
  defaultPageSize = 10;
  arrPagesSize = [5,10,20];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  selectedRowIndex = -1;

  constructor(private crudService: CrudService) { }

  ngOnInit() {
    
    this.crudService.getSelectors().then((result : any) => {
      this.dataSource.data = result;
    })
  }

  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {

      this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onSelectRow(row){
    this.selectedRowIndex = row.id;
  }

  isSelectedRow(row){

    return (this.selectedRowIndex == row.id);
  }
}