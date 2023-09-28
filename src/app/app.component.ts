import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform     : Platform,
    private statusBar    : StatusBar
  ) {
    this.initializeApp();
  }

  public showSplashScreen : boolean = true;

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      timer(2000).subscribe(p => this.showSplashScreen = false);
    });
  }

  public appPages = [
    {
      title: 'Anatômia Humana',
      url: '/exibicao',
      icon: 'md-image'
    },
    {
      title: 'Filtrar',
      url: '/pesquisa',
      icon: 'md-search'
    }
  ];

  public getImagem() : string{
    return '../assets/img/splashscreen.png'; 
  }
}
