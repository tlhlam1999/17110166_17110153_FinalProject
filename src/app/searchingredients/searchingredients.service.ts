import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class SearchIngreByNameService {
    constructor(private http: HttpClient) {
    }
    private urlAPI = "api/IngredientDetail/";
    getIngre = async (name) => {
        try {
            const result = await this.http.get(this.urlAPI + "/search"+ name).toPromise();
            return result;
        }
        catch (e) {
            console.log(e);
            // this.removeToken();
        }
    }
    getallIngreByName = async (name) => {
        try {

            const result = await this.http.get(this.urlAPI + "search?name="+name).toPromise();
            return result;
        }
        catch (e) {
            console.log(e);
            // this.removeToken();
        }
    }
}