import { Component } from '@angular/core';

import { MarvellousService } from '../marvellous.service';

import { OnInit } from '@angular/core';


@Component({
  selector: 'app-batch-names',
  templateUrl: './batch-names.component.html',
  styleUrl: './batch-names.component.css'
})
export class BatchNamesComponent implements OnInit
{
  public Batches : any;

  constructor(private Mservice : MarvellousService)
  {}

  ngOnInit()
  {
    this.Mservice.getBatches().subscribe(data=>
      {
        this.Batches = data;
      })
  }
}
