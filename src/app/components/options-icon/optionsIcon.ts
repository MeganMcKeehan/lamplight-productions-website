import { Component, Input } from '@angular/core';
import { OptionTypeItem } from '../../classes/optionTypeItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'optionIcon',
  templateUrl: './optionsIcon.html',
  imports: [CommonModule],
})
export class OptionsIconComponent {
  @Input() option: OptionTypeItem | null = null;

  constructor() {
    console.log(this.option);
  }
}
