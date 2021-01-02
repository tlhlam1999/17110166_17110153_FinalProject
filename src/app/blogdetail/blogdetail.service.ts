import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class BlogdetailService {
    constructor(private http: HttpClient) {
    }
    private urlAPI = "api/Blog/";

    getProduct = async (id) => {
        try {
            const result = await this.http.get(this.urlAPI+id).toPromise();
            return result;
        }
        catch (e) {
            console.log(e);
            // this.removeToken();
        }
    }
}