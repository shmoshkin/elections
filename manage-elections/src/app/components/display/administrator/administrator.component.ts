import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})

export class AdministratorComponent implements OnInit {

  constructor(public snackBar:MatSnackBar) { }

  ngOnInit() {
  }

}
