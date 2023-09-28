import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listplanta',
  templateUrl: 'listplanta.page.html',
  styleUrls: ['listplanta.page.scss']
})
export class ListPlantaPage implements OnInit {
  
  constructor(private appService : AppService, private router : ActivatedRoute, private route : Router) {
    this.router.params.subscribe((params:any)=>{
      this.paramter = Number(params['id']);
      this.setItens(this.paramter);
    });
  }
  public paramter : Number = null;
  public itens    : Array<any> = [];

  ngOnInit() {
  } 

  public onClick(id : Number) : void {
    this.route.navigate(['/detailplanta',id]);
  }

  private setItens(idOrgao : Number) : void {
    this.itens = this.appService.PLANTAS.filter(p => p.orgao.id == idOrgao);
  }

  public getTitleGrupo() : string {
    if(this.itens != null && this.itens.length > 0){
      let aux = this.itens.find(p => p.orgao.id == this.paramter);
      if(aux != null){
        return aux.orgao.title + " | lista de plantas";
      }
    }
    return 'Registro não encontrado';
  }

  public getImagem( item : any) : string {
    if(item.imagem != null && item.imagem != ""){
      return item.imagem;
    }
    return '../../assets/coracao.jpg'
  }
}
