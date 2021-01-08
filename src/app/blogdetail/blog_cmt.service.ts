import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class CmtBlogService {
    private urlAPI = 'api/CommentBlog/';

    constructor(private http: HttpClient) {

    }
    createcmtblog = async (formData) => {
        return await this.http.post(this.urlAPI,formData).toPromise();            
    }
}