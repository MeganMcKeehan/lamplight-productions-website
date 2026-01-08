import { SubCatagoryItem } from './subCategoryItem';

export class OptionTypeItem {
  public type: string;
  public iconUrl: string;
  public routeUrl: string;
  public subCategories: SubCatagoryItem[];

  constructor(type: string, iconUrl: string, routeUrl: string, subCategories: SubCatagoryItem[]) {
    this.type = type;
    this.iconUrl = iconUrl;
    this.routeUrl = routeUrl;
    this.subCategories = subCategories;
  }
}
