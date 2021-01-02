import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class DeclareService {
    constructor(private http: HttpClient) {
    }
    private urlAPI = "api/Point/";

    getDeclare = async (id) => {
        try {
            const result = await this.http.get(this.urlAPI+id).toPromise();
            return result;
        }
        catch (e) {
            console.log(e);
            // this.removeToken();
        }
    }
  
    createDeclare = async (formData) => {
        return await this.http.post(this.urlAPI,formData).toPromise();            
    }
}