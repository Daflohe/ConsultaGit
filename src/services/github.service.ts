import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  

   constructor(public http:HttpClient) {
  }

  url = "https://api.github.com/users/";
  
  public async getUser(user:string) {
    var DataResponse:any;
    await this.http.get(this.url+user).toPromise().then((res)=>{
      DataResponse = res;
    })
    return DataResponse;
  }
  
}
