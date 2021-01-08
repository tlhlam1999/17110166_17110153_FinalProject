import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class ProductdetailsService {
    constructor(private http: HttpClient) {
    }
    private urlAPI = "api/Product/";

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
    getCommentProduct = async (id) => {
        try {
            const result = await this.http.get("api/CommentProduct/cmt?idP="+id).toPromise();
            return result;
        }
        catch (e) {
            console.log(e);
        }
    }
    createComment = async (formdata) => {
        try {
            const result = await this.http.post("api/CommentProduct/",formdata).toPromise();
            return result;
        }
        catch (e) {
            console.log(e);
        }
    }
}