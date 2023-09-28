import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exibicao',
  templateUrl: 'exibicao.page.html',
  styleUrls: ['exibicao.page.scss'],
})
export class ExibicaoPage {

  public v  : number = 630;
  public vv = 573;
  public div = 0;

  public cerebro    = [314,85,77];
  public pulmao1    = [332,199,369,214,386,319,338,300];
  public pulmao2    = [259,203,222,317,287,300,286,241,286,205,273,203];
  public coracao    = [291,301,333,305,332,215,289,216];
  public figado     = [284,306,237,319,238,382,352,318,332,306];
  public estomago   = [363,310,317,349,323,361,354,363,373,349,376,329];
  public rim1       = [279,383,22];
  public rim2       = [335,381,21];
  public intdelgado = [265,469,275,488,320,475,353,485,350,420,308,432,267,422];
  public intgrosso1 = [241,392,259,398,271,498,250,508,241,483];
  public intgrosso2 = [270,406,269,417,303,430,322,428,368,412,369,383,329,410,310,420,291,411];
  public intgrosso3 = [353,424,368,414,371,491,355,511,324,509,306,535,281,497,318,478,355,486];

  constructor(private router : Router) {

    this.div = this.calculaTamanho(); 

    this.setSize();
  }

  public setSize() : void{
    for(let i = 0;i < this.cerebro.length;i++){
      this.cerebro[i] = (this.cerebro[i]/this.div);
    }
    for(let i = 0;i < this.pulmao1.length;i++){
      this.pulmao1[i] = (this.pulmao1[i]/this.div);
    }
    for(let i = 0;i < this.pulmao2.length;i++){
      this.pulmao2[i] = (this.pulmao2[i]/this.div);
    }
    for(let i = 0;i < this.coracao.length;i++){
      this.coracao[i] = (this.coracao[i]/this.div);
    }
    for(let i = 0;i < this.figado.length;i++){
      this.figado[i] = (this.figado[i]/this.div);
    }
    for(let i = 0;i < this.estomago.length;i++){
      this.estomago[i] = (this.estomago[i]/this.div);
    }
    for(let i = 0;i < this.rim1.length;i++){
      this.rim1[i] = (this.rim1[i]/this.div);
    }
    for(let i = 0;i < this.rim2.length;i++){
      this.rim2[i] = (this.rim2[i]/this.div);
    }
    for(let i = 0;i < this.intdelgado.length;i++){
      this.intdelgado[i] = (this.intdelgado[i]/this.div);
    }
    for(let i = 0;i < this.intgrosso1.length;i++){
      this.intgrosso1[i] = (this.intgrosso1[i]/this.div);
    }
    for(let i = 0;i < this.intgrosso2.length;i++){
      this.intgrosso2[i] = (this.intgrosso2[i]/this.div);
    }
    for(let i = 0;i < this.intgrosso3.length;i++){
      this.intgrosso3[i] = (this.intgrosso3[i]/this.div);
    }
  }

  public getCerebro() : string{
    return this.cerebro.join(",");
  }
  public getPulmao1() : string{
    return this.pulmao1.join(",");
  }
  public getPulmao2() : string{
    return this.pulmao2.join(",");
  }
  public getRim1() : string{
    return this.rim1.join(",");
  }
  public getRim2() : string{
    return this.rim2.join(",");
  }
  public getIntGrosso1() : string{
    return this.intgrosso1.join(",");
  }
  public getIntGrosso2() : string{
    return this.intgrosso2.join(",");
  }
  public getIntGrosso3() : string{
    return this.intgrosso3.join(",");
  }
  public getCoracao() : string{
    return this.coracao.join(",");
  }
  public getFigado() : string{
    return this.figado.join(",");
  }
  public getIntDelgado() : string{
    return this.intdelgado.join(",");
  }
  public getEstomago() : string{
    return this.estomago.join(",");
  }


  public calculaTamanho() : number{
    if(this.v <= window.screen.width){
      return 1;
    }
    return this.v / window.screen.width;
  }

  public onClick(codOrgao : Number) : void{
    this.router.navigate(['/detailorgao',codOrgao]);
  }

  public getTitle() : string{
    return 'Selecione o orgão desejado';
  }

  public getImagem() : string{
    return '../assets/img/orgaosdocorpo.jpg';
  }
}
