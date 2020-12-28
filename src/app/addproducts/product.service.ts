import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private urlAPI = 'api/Product/';

    constructor(private http: HttpClient) {

    }
    createTrip = async (formData) => {
        return await this.http.post(this.urlAPI,formData).toPromise();            
    }
}