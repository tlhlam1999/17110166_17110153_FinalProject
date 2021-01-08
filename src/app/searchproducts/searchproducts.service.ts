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

            const result = await this.http.get(this.urlAPI + "search?name="+name).toPromise();
            return result;
        }
        catch (e) {
            console.log(e);
            // this.removeToken();
        }
    }
    getallProductByPoint = async (point) => {
        try {

            const result = await this.http.get(this.urlAPI + "search?point="+point).toPromise();
            return result;
        }
        catch (e) {
            console.log(e);
            // this.removeToken();
        }
    }
    getallProductByLoaisp = async (loaisp) => {
        try {

            const result = await this.http.get(this.urlAPI + "search?loaisp="+loaisp).toPromise();
            return result;
        }
        catch (e) {
            console.log(e);
            // this.removeToken();
        }
    }
}