import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Master {
  http = inject(HttpClient);

  getAllService(){
    return this.http.get("https://localhost:7182/api/ServiceMaster")
  }

  createNewService(obj: any){
    return this.http.post("https://localhost:7182/api/ServiceMaster", obj)
  }
}
