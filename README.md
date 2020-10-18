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

## Areas of improvement
* Not all components are fully unit tested. `MainPanel`, `InfoPanel` and `SelectPanel` however, contain the minimum recommended test criteria - props and state.
* When fetching data, some components display 'No data' or 'No spells found'. This can be improved by rendering a skeleton or hints while waiting for data to be fetched.
* Apply the `prerequisite-spell` selection mechanism to classes, based on the assumption that any one class has only one subclass, and they both should have the same spell sets.