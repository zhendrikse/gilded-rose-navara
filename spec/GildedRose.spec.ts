import { Item, GildedRose } from '../src/GildedRose';

describe('Gilded Rose', () => {
  it('updates a foo item', () => {
    const item =  new Item("Foo", 0, 0);
    const gildedRose = new GildedRose([item]);
    const updated_items = gildedRose.updateQuality();
    expect(item.sellIn).toEqual(-1);
    expect(item.quality).toEqual(0);
  });
});
