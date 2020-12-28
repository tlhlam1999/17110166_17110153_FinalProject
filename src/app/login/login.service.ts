import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class LoginService {
    constructor(private http: HttpClient) {
    }
    private urlAPI = "api/User/";

    createUser = async (user) => {
        try {
            const result = await this.http.post(this.urlAPI,user).toPromise()
            return result;
        }
        catch (e) {
            alert("Username trùng rồi !")
        }
    }
    loginUser = async (user) => {
        try {
            const result = await this.http.post(this.urlAPI+"login",user).toPromise()
            return result;
        }
        catch (e) {
            alert("Username or Password incorrect !")
        }
    }
}