import { OptionsItem } from '../classes/optionsItem';
import { OptionTypeItem } from '../classes/optionTypeItem';
import { SubCatagoryItem } from '../classes/subCategoryItem';
import { DEFAULT_SUBCATEGORY_ICON_URL } from '../constants/globalConstants';

export class BagOptionsService {
  bagSizeIconUrl: string = 'bag-size-icon-url';

  public bagOptions: OptionTypeItem[] = [
    new OptionTypeItem('Bags', 'bag-icon-url', '/bags', [
      new SubCatagoryItem('bagSize', this.bagSizeIconUrl, [
        new OptionsItem('Small', 'small-bag-url'),
        new OptionsItem('Medium', 'medium-bag-url'),
        new OptionsItem('Large', 'large-bag-url'),
      ]),
    ]),
    new OptionTypeItem('Materials', 'accessories-icon-url', '/accessories', [
      new SubCatagoryItem('fabrics', DEFAULT_SUBCATEGORY_ICON_URL, [
        new OptionsItem('Leather Keychain', 'leather-keychain-url'),
      ]),
    ]),
    new OptionTypeItem('Embroidery', 'accessories-icon-url', '/accessories', [
      new SubCatagoryItem('Circle Patterns', 'keychain-icon-url', [
        new OptionsItem('Leather Keychain', 'leather-keychain-url'),
      ]),
      new SubCatagoryItem('Hex Patterns', 'charms-icon-url', [
        new OptionsItem('Bag Charm', 'bag-charm-url'),
      ]),
    ]),
    new OptionTypeItem('Drawstrings', 'accessories-icon-url', '/accessories', [
      new SubCatagoryItem('drawstrings', DEFAULT_SUBCATEGORY_ICON_URL, [
        new OptionsItem('Leather Keychain', 'leather-keychain-url'),
      ]),
    ]),
    new OptionTypeItem('Zippers', 'accessories-icon-url', '/accessories', [
      new SubCatagoryItem('zippers', DEFAULT_SUBCATEGORY_ICON_URL, [
        new OptionsItem('Leather Keychain', 'leather-keychain-url'),
      ]),
    ]),
    new OptionTypeItem('Colors', 'accessories-icon-url', '/accessories', [
      new SubCatagoryItem('main material', 'keychain-icon-url', [
        new OptionsItem('Leather Keychain', 'leather-keychain-url'),
      ]),
      new SubCatagoryItem('embroidery', 'charms-icon-url', [
        new OptionsItem('Bag Charm', 'bag-charm-url'),
      ]),
      new SubCatagoryItem('drawstring', 'charms-icon-url', [
        new OptionsItem('Bag Charm', 'bag-charm-url'),
      ]),
      new SubCatagoryItem('zipper', 'charms-icon-url', [
        new OptionsItem('Bag Charm', 'bag-charm-url'),
      ]),
    ]),
  ];
}
