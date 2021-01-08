import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class BlogdetailService {
    constructor(private http: HttpClient) {
    }
    private urlAPI = "api/Blog/";

    getBlog = async (id) => {
        try {
            const result = await this.http.get(this.urlAPI+id).toPromise();
            return result;
        }
        catch (e) {
            console.log(e);
            // this.removeToken();
        }
    }
    getCommentBlog = async (id) => {
        try {
            const result = await this.http.get("api/CommentBlog/cmt?idP="+id).toPromise();
            return result;
        }
        catch (e) {
            console.log(e);
        }
    }
    createComment = async (formdata) => {
        try {
            const result = await this.http.post("api/CommentBlog",formdata).toPromise();
            return result;
        }
        catch (e) {
            console.log(e);
        }
    }
}