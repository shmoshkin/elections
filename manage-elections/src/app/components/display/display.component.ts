// Angular
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort, MatSnackBar} from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
import {SelectionModel} from '@angular/cdk/collections';

// Rxjs
import {Observable} from 'rxjs/Observable';

// Models
import {Selector} from '../../models/Selector.model';

// Services
import {CrudService} from '../../services/crud-service/crud.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

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
  prevSelectedRowIndex = -1;
  message = "נתונים נטענו בהצלחה";
  action = "סגור";

  constructor(private crudService: CrudService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    
   this.loadData();
  }

  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadData(){

    this.crudService.getSelectors().then((result : any) => {
      this.dataSource.data = result;
      this.message = "נתונים נטענו בהצלחה";
      this.openSnackBar(this.message, this.action);
    })
    .catch(() => {
      this.dataSource.data = [];
      this.message = "ארעה שגיאה בטעינת הנתונים";
      this.openSnackBar(this.message, this.action);
    })
  }

  applyFilter(filterValue: string) {

      this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onSelectRow(row){

    this.prevSelectedRowIndex = this.selectedRowIndex;
    this.selectedRowIndex = row.id;
  }

  isSelectedRow(row){

    let bIsSelectedRow = this.selectedRowIndex == row.id;
    let bIsToggle = false;
    
    if(bIsSelectedRow){
      
      bIsToggle = (this.selectedRowIndex == this.prevSelectedRowIndex);

      if(bIsToggle){

        this.prevSelectedRowIndex = -1;
        this.selectedRowIndex = -1;
      }
    }

    return ((bIsSelectedRow) && (!bIsToggle));
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}