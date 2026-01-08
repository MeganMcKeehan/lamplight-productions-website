import { Component } from '@angular/core';
import { BagOptionsService } from '../../services/bagOptionsService';
import { OptionsIconComponent } from '../../components/options-icon/optionsIcon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mainPage',
  templateUrl: './mainPage.component.html',
  styleUrl: './mainPage.component.scss',
  imports: [OptionsIconComponent, CommonModule],
})
export class MainPage {
  private bagOptionsService: BagOptionsService = new BagOptionsService();
  public bagOptions = this.bagOptionsService.bagOptions;
  constructor() {}
}
