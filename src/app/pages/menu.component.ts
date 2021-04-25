import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

import { DarkMode } from '../shared/dark-mode';
// import { AppSettings } from 'src/environments/app.settings';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

    public selectedUrl = '';
    public pages = [
        {
            title: 'Simulados', url: '/page/home', icon: 'grid' // 'stats-chart' // 'analytics'
        },
        {
            title: 'Resultados', url: '/page/resultados', icon: 'repeat'
        },
        {
            title: 'Perfil', url: '/page/profile', icon: 'person'
        },
        // {
        //     title: 'Vendas', url: '/page/vendas', icon: 'cart'
        // },
        // {
        //     title: 'Entregas', url: '/page/entregas', icon: 'basket'
        // },
        // {
        //     title: 'Pedidos', url: '/page/pedidos', icon: 'cube'
        // },
        // {
        //     title: 'Avaliações dos Produtos', url: '/page/avaliacoes', icon: 'chatbubbles'
        // }
    ];

    public toggleThemeAvailable: boolean;
    public darkTheme: boolean;

    versao: string;

    constructor(private router: Router) {
        this.router.events.subscribe((e: RouterEvent) => {
            this.selectedUrl = e.url;
        });

        this.versao = 'versão 0.0.1'; // `versão ${AppSettings.version}`;

    }

    ngOnInit() {
        this.toggleThemeAvailable = DarkMode.IsAvailable();
        this.darkTheme = DarkMode.IsActived();
        // console.log('darkTheme', this.darkTheme);
    }

    onThemeChanged(event) {
        // console.log('onThemeChanged', event.detail.checked);
        DarkMode.toggleDarkMode(event.detail.checked);
    }
}
