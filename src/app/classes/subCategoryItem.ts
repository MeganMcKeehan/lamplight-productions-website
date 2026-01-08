import { OptionsItem } from './optionsItem';

export class SubCatagoryItem {
  public name: string;
  public imageUrl: string;
  public options: OptionsItem[];

  constructor(name: string, imageUrl: string, options: OptionsItem[]) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.options = options;
  }
}
