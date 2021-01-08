import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class CmtProductService {
    private urlAPI = 'api/CommentProduct';

    constructor(private http: HttpClient) {

    }
}