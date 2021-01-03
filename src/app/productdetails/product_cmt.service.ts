import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class CmtProductService {
    private urlAPI = 'api/CommentProduct/';

    constructor(private http: HttpClient) {

    }
    createcmtpro = async (formData) => {
        return await this.http.post(this.urlAPI,formData).toPromise();            
    }
}