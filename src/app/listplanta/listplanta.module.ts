import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { AppService } from '../app.service';
import { ListPlantaPage } from './listplanta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{
        path: '',
        component: ListPlantaPage
      }])
  ],
  providers: [AppService],
  declarations: [ListPlantaPage]
})
export class ListPlantaPageModule {}
