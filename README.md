# About the Gilded Rose kata

The [Gilded Rose kata](https://github.com/emilybache/GildedRose-Refactoring-Kata) is a kata about a store where goods degrade in quality as they approach their sell date:

- All items have a SellIn value which denotes the number of days we have to sell the item
- All items have a Quality value which denotes how valuable the item is
- At the end of each day, our system lowers both values for every item

The item sell date and quality are daily updated by invocation of the associated `update()` method call.
Pretty simple, right? Well, this is where it gets interesting:

- Once the sell by date has passed, Quality degrades twice as fast
- The Quality of an item is never negative
- "Aged Brie" actually increases in Quality the older it gets
- The Quality of an item is never more than 50
- "Sulfuras", being a legendary item, never has to be sold or decreases in Quality
- "Backstage passes", like aged brie, increases in Quality as its SellIn value approaches;
Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but
Quality drops to 0 after the concert

## Eventual goal

The eventual goal of this kata is to add a new category of items, namely "Conjured" items that degrade in `Quality` twice as fast as normal items.

## One-click start

[![Open in Gitpod](https://img.shields.io/badge/Open_in-gitpod-yellow?logo=gitpod)](https://gitpod.io/#https://github.com/zhendrikse/gilded-rose-navara)
