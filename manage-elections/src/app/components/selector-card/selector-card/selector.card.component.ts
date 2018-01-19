import { Component, OnInit, Inject } from '@angular/core';

import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-selector-card',
  templateUrl: './selector.card.component.html',
  styleUrls: ['./selector.card.component.css']
})
export class SelectorCardComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
   
  }

}
