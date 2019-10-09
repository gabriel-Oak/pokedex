import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    headerClass: string;
    title: string;

    constructor() {
        this.headerClass = 'default';
        this.title = '';
    }

    setClass(headerClass: string): void {
        this.headerClass = headerClass;
    }

    setTitle(title: string): void {
        this.title = title;
    }
}
