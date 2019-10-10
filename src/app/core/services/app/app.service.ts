import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    headerClass: string;
    title: string;

    constructor() {
        this.title = '';
        this.headerClass = 'default';
    }

    setClass(headerClass: string): void {
        this.headerClass = headerClass;
    }

    setTitle(title: string): void {
        this.title = title;
    }
}
