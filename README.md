## Setup

```
$ git clone https://github.com/evthedev/dnd-character-builder.git
$ cd dnd-character-builder
$ npm i
$ npm start
$ npm test
```

## Assumptions made
* The dnd5eapi is reliable and data shape is fixed.
* The first item in the 'prerequisites' array is always of `'type': 'level'` 

## Reasonings
* AntD UI was chosen as the UI library as it ships with typings and is well supported. 

* The user must be allowed to choose between a class or subclass, so instead of a class -> subclass drilldown, the user experience starts with a choice between class and subclass, which then exposes either option.

* Classes and subclasses have completely different data shapes except for the `name` and `index` properties. I have therefore chosen to lean towards subclass that has the `desc` property, so if a class is selected, only `name` will be displayed, but a subclass will have `name` and `desc`.

* Level selection - I have chosen to use the subclass property `spells` that contains the `prerequisite-spell` properties for spell selection. Because of this, level selection is only available for subclasses and not classes.

* Higher levels automatically inherit spells from the lower levels.

## Known issues
* Not all components are unit tested. `MainPanel`, `InfoPanel` and `SelectPanel` however, consists of the minimum recommended test aspects - props and state.
