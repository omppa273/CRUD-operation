import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; // Used to connect with Server


@Injectable({
  providedIn: 'root'
})
export class MarvellousService 
{

  constructor(private http : HttpClient) 
  { }

  // Read Batches from MongoDB
  getBatches()
  {
    return this.http.get("http://localhost:2100/getbatches");
  }

  // Delete Batches from MongoDB
  deleteBatches()
  {
    return this.http.get("http://localhost:2100/deletebatches");
  }

    // Insert Batches from MongoDB
  insertBatches()
  {
    return this.http.get("http://localhost:2100/insertbatches");
  }

  // Insert Batches from MongoDB
  updateBatches()
  {
    return this.http.get("http://localhost:2100/updatebatches");
  }

}
