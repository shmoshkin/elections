// Angular
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort, MatSnackBar, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
import {SelectionModel} from '@angular/cdk/collections';

// Models
import {Selector} from '../../models/Selector.model';

// Services
import {CrudService} from '../../services/crud-service/crud.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

// Components
import {SelectorCardComponent} from '../selector-card/selector-card/selector.card.component';
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
  selectedRow = null;
  selectedRowIndex = -1;
  prevSelectedRowIndex = -1;
  message = "נתונים נטענו בהצלחה";
  action = "סגור";

  constructor(private crudService: CrudService, public snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit() {
    
   this.loadData();
  }

  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadData(): void{

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

  onSelectRow(row) : void{

    this.selectedRow = row;
    this.prevSelectedRowIndex = this.selectedRowIndex;
    this.selectedRowIndex = row.id;
  }

  isSelectedRow<Boolean>(row){

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

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

  openSelectorCard(): void {
    let dialogRef = this.dialog.open(SelectorCardComponent, {
      width: '650px',
      height: '450px',
      data: { 'selector': this.selectedRow }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }
}