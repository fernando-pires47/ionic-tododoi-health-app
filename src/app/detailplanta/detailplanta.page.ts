import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailplanta',
  templateUrl: './detailplanta.page.html',
  styleUrls: ['./detailplanta.page.scss'],
})
export class DetailPlantaPage implements OnInit {

  constructor(private appService : AppService,private router : ActivatedRoute){
    this.router.params.subscribe((params:any)=>{
      this.paramter = Number(params['id']);
      this.setItens(this.paramter);
    });
   }
   
  public paramter : Number = null;
  public object : any = {}; 

   public setItens(id : Number) : void {
     this.object = this.appService.PLANTAS.find(p => p.id == id);
   }

  ngOnInit() {
  }

  public getImagem() : string {
    return this.object.imagem;
  }

  public getTitle() : string {
    return  this.object.title;
  }

}
