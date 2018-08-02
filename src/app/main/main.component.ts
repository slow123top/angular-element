import { Component, OnInit } from '@angular/core';
import { Card } from '../utils/class/card';
import { Form } from '../utils/class/form';
import { GetCardService } from '../utils/service/get-card.service';
@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css'],
    providers: [GetCardService]
})
export class MainComponent implements OnInit {
    imgUrl: string;
    cards: Card[];
    loginForm: Form;
    registerForm: Form;
    constructor(private getCardService: GetCardService) {
        this.imgUrl = '../../assets/img/logo.png';
        // 登录注册
        this.loginForm = {
            formText: '登录',
            formLogin: true
        };
        this.registerForm = {
            formText: '注册',
            formLogin: false
        };
        this.getCardService.getCard().subscribe((data: any) => {
            this.cards = data;
        });
    }
    ngOnInit() {
    }
}
