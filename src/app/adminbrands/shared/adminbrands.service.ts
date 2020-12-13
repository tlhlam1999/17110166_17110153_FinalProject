import { Injectable } from '@angular/core';
import { Brand } from './adminbrands.model';

@Injectable({
    providedIn: 'root'
})
export class BrandService {
    formData: Brand
    constructor (){}
}