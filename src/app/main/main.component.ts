import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})

export class MainComponent {
    constructor() {

    }
    // imgUrl: String;
    // ngOnInit() {
    //     this.imgUrl = 'https://angularjs.org/img/AngularJS-large.png';
    // }
    imgUrl = '../../assets/img/logo.png';
    title = 'mainComponent';
}
