import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class SearchIngredientsService {
    constructor(private http: HttpClient) {
    }
    private urlAPI = "api/IngredientDetail/";

    getIngredient = async (id) => {
        try {
            const result = await this.http.get(this.urlAPI+id).toPromise();
            return result;
        }
        catch (e) {
            console.log(e);
            // this.removeToken();
        }
    }
    getallIngredient = async () => {
        try {
            const result = await this.http.get(this.urlAPI).toPromise();
            return result;
        }
        catch (e) {
            console.log(e);
            // this.removeToken();
        }
    }
}