import { Component } from '@angular/core';

import { MarvellousService } from '../marvellous.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrl: './batch.component.css'
})
export class BatchComponent implements OnInit
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

  deleteData()
  {
    this.Mservice.deleteBatches().subscribe(data=>
      {
        this.Batches = data;
      })
  }

  insertData()
  {
    this.Mservice.insertBatches().subscribe(data=>
      {
        this.Batches = data;
      })
  }

  updateData()
  {
    this.Mservice.updateBatches().subscribe(data=>
      {
        this.Batches = data;
      })
  }

}
