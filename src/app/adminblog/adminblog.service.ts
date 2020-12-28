import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class AdminblogService {
    private urlAPI = 'api/Blog/';

    constructor(private http: HttpClient) {

    }
    createBlog = async (formData) => {
        return await this.http.post(this.urlAPI,formData).toPromise();            
    }
}