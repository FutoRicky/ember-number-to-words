# Ember-number-to-words
[![Ember Observer Score](https://emberobserver.com/badges/ember-number-to-words.svg)](https://emberobserver.com/addons/ember-number-to-words)
[![Build Status](https://travis-ci.org/FutoRicky/ember-number-to-words.svg?branch=master)](https://travis-ci.org/FutoRicky/ember-number-to-words)

Ember addon for converting number digits to words.

[DEMO](http://futoricky.github.io/ember-number-to-words/)

## Installation

`ember install ember-number-to-words`

## Usage

Depending on language the component call is different. Currently it only supports English.

Example:

`{{number-to-english number=11}}` will return `eleven`

### Properties

| Property    | Attribute  | Description                       | Required |
| ----------- | ---------- | --------------------------------- | -------- |
| number      | `integer`  | Integer to convert to word        | Yes      |
| decimal     | 'word'     | Returns decimal in word format    | No       |
|             | 'fraction' | Return decimal in fraction format | No       |                          

*By default it just ignores the decimal and counts it as part of the integer


##Contributions

All contributions are welcomed and encouraged.

Please make all pull requests to the `dev` branch.

Thanks!
