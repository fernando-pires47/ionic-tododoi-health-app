import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.page.html',
  styleUrls: ['./pesquisa.page.scss'],
})
export class PesquisaPage implements OnInit {

  public orgaos : Array<any> = [];
  public plantas : Array<any> = [];
  public object : any = {};

  constructor(private service : AppService,private route : Router) {
    this.orgaos = this.service.ORGAOS;
    this.setPlantas();
   }

   public setPlantas() : void {
    this.plantas = this.service.PLANTAS;
   }

   public onSelectOrgao(event : any) : void {
     this.object.planta = null;
     this.plantas = null;
     if(event.detail.value != null){
      this.plantas = this.service.PLANTAS.filter(p => p.orgao.id == event.detail.value.id);
     }else{
       this.setPlantas();
     }
   }

   public plantaSelectEnable() : boolean {
     return (this.plantas != null && this.plantas.length > 0);
   }

   public msgSelectPlanta() : string {
     if(! this.plantaSelectEnable()){
        return 'nenhuma planta encontrada';
      }
      return 'selecione';
   }

   public onClick() : void{
     if(this.object.orgao == null && this.object.planta == null){
       return;
     }
     if(this.object.planta == null){
      this.route.navigate(['/detailorgao',this.object.orgao.id]);
     }else{
      this.route.navigate(['/detailplanta',this.object.planta.id]);
     }
   }

  ngOnInit() {
  }

}
