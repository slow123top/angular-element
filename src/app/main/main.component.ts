import { Component, OnInit } from '@angular/core';
import { Card } from '../utils/card';
import { Form } from '../utils/form';
@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})

export class MainComponent {
    imgUrl: string;
    cards: Card[];
    loginForm: Form;
    registerForm: Form;
    constructor() {
        this.imgUrl = '../../assets/img/logo.png';
        this.cards = [
            {
                name: '通知公告',
                content: ['浪潮位列“2018中国电子信息百强企业”第12位',
                    '潮公有云北京新节点正式上线试运行',
                    '浪潮政务云GPU云服务器产品正式发布',
                    '【智慧城市媒体行】济南推进智慧泉城建设']
            },
            {
                name: '集团新闻',
                content: [
                    '【智慧城市媒体行】济南推进智慧泉城建设',
                    '第十届青年成长奖励基金获奖员工事迹展播',
                    '【智慧城市媒体行】济南推进智慧泉城建设',
                    '【智慧城市媒体行】济南推进智慧泉城建设',
                ]
            },
            {
                name: '国际新闻',
                content: [
                    '【智慧城市媒体行】济南推进智慧泉城建设【智慧城市媒体行】济南推进智慧泉城建设',
                    '第十届青年成长奖励基金获奖员工事迹展播',
                    '【智慧城市媒体行】济南推进智慧泉城建设',
                    '【智慧城市媒体行】济南推进智慧泉城建设',
                ]
            }
        ];
        // 登录注册
        this.loginForm = {
            formText: '登录',
            formLogin: true
        };
        this.registerForm = {
            formText: '注册',
            formLogin: false
        };
    }
    login() {
    }
    register() {

    }
}
