import { Component, OnInit } from '@angular/core';

import { AppService } from 'src/app/core/services/app/app.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(
    private app: AppService
  ) { }

  ngOnInit() {
    this.app.setClass('default');
    this.app.setTitle('Não Encontrado');
  }

}
