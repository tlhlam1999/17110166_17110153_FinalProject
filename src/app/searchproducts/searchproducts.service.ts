import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class AllProductByNameService {
    constructor(private http: HttpClient) {
    }
    private urlAPI = "api/Product/";
    getProduct = async (name) => {
        try {
            const result = await this.http.get(this.urlAPI + "/search"+ name).toPromise();
            return result;
        }
        catch (e) {
            console.log(e);
            // this.removeToken();
        }
    }
    getallProductByName = async (name) => {
        try {
            const result = await this.http.get(this.urlAPI + "search"+ name).toPromise();
            return result;
        }
        catch (e) {
            console.log(e);
            // this.removeToken();
        }
    }
}