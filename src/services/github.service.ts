import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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
    
    }).catch((err: HttpErrorResponse) => {
        // simple logging, but you can do a lot more, see below
        window.alert("No hay usuarios que cumplan con el criterio de búsqueda");
        console.error('An error occurred:', err.error);
      });
    
    return DataResponse;
    
  }

}
