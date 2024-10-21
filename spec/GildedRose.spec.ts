import { Item, GildedRose } from '../src/GildedRose';
import { verify } from "approvals/lib/Providers/Jest/JestApprovals";
import { configure } from "approvals/lib/config";
import { JestReporter } from "approvals/lib/Providers/Jest/JestReporter";

function convert_items_to_string(items = [] as Array<Item>) {
  let items_as_string = items.map((item) => item.toString() + "\n")
  return items_as_string.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    "",
  );
}

describe('Gilded Rose', () => {
  beforeAll(() => {
    configure({
      reporters: [new JestReporter()],
    });
  });

  it('updates a foo item', () => {
    const items = [
      new Item("Foo", 0, 0)
    ];
    const gildedRose = new GildedRose(items);
    const updated_items = gildedRose.updateQuality();
    verify(convert_items_to_string(updated_items));
  });
});
