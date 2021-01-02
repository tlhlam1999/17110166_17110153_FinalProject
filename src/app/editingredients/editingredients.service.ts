import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class EditingredientsService {
    private urlAPI = 'api/IngredientDetail/';

    constructor(private http: HttpClient) {

    }
    createIngredients = async (formData) => {
        return await this.http.post(this.urlAPI,formData).toPromise();            
    }
}