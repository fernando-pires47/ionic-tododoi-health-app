import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detailorgao',
  templateUrl: './detailorgao.page.html',
  styleUrls: ['./detailorgao.page.scss'],
})
export class DetailorgaoPage implements OnInit {

  public paramter : Number = null;
  public object : any = {};

  constructor(private service: AppService,private router : ActivatedRoute, private route : Router) { 
    this.router.params.subscribe((params:any)=>{
      this.paramter = Number(params['id']);
      this.setObject(this.paramter);
    });
  }

  public onClick() : void {
    this.route.navigate(['/listplanta',this.object.id]);
      
  }

  private setObject(idOrgao : Number) : void{
    this.object = this.service.ORGAOS.find(p => p.id == idOrgao);

  }

  ngOnInit() {
  }

  public getImagem() : string{
    return this.object.imagem;
  }

}
