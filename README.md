# Ember-number-to-words
[![Ember Observer Score](https://emberobserver.com/badges/ember-number-to-words.svg)](https://emberobserver.com/addons/ember-number-to-words)
[![Build Status](https://travis-ci.org/FutoRicky/ember-number-to-words.svg?branch=master)](https://travis-ci.org/FutoRicky/ember-number-to-words)

Ember addon for converting number digits to words.

[DEMO](http://futoricky.github.io/ember-number-to-words/)

## Installation

`ember install ember-number-to-words`

## Usage

Depending on language the component call is different.

### Supported Languages

| Language | Component           | Example                                                  |
| -------- | ------------------- | -------------------------------------------------------- |
| English  | `number-to-english` | `{{number-to-english number=11}}` will return `eleven`   |
| French   | `number-to-french`  | `{{number-to-french number=11}}` will return `onze`      |

### Properties

| Property    | Attribute  | Description                               | Required   |
| ----------- | ---------- | ----------------------------------------- | ---------- |
| number      | `integer`  | Integer to convert to word                | Yes        |
| decimal     | 'word'     | Returns decimal in word format            | No         |
|             | 'fraction' | Return decimal in fraction format         | No         |
| capitalize  | `boolean`  | If true, returns capitalized first letter | No         |

*By default it just ignores the decimal and counts it as part of the integer*

## Language Contributions :metal:
**English**: [@futoricky](https://github.com/futoricky)

**French**: [@cicoub13](https://github.com/cicoub13)

##Contributions

All contributions are welcomed and encouraged.

Please make all pull requests to the `dev` branch.

Thanks!
