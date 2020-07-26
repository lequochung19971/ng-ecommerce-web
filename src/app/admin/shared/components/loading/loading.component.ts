import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  isLoaded: any;
  constructor(protected loadingService: LoadingService) {
    this.isLoaded = this.loadingService.isLoaded();
  }

  ngOnInit(): void {}
}
