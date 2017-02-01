import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('number-to-english', 'Integration | Component | number to english', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{number-to-english number=''}}`);

  assert.equal(this.$().text().trim(), '');
});

// words testing
test('it returns correct words for single digit numbers', function(assert) {
  this.render(hbs`{{number-to-english number=0}}`);
  assert.equal(this.$().text().trim(), 'zero');

  this.render(hbs`{{number-to-english number=1}}`);
  assert.equal(this.$().text().trim(), 'one');

  this.render(hbs`{{number-to-english number=5}}`);
  assert.equal(this.$().text().trim(), 'five');

  this.render(hbs`{{number-to-english number=9}}`);
  assert.equal(this.$().text().trim(), 'nine');
});

test('it returns correct words for double digit numbers', function(assert) {
  this.render(hbs`{{number-to-english number=10}}`);
  assert.equal(this.$().text().trim(), 'ten');

  this.render(hbs`{{number-to-english number=11}}`);
  assert.equal(this.$().text().trim(), 'eleven');

  this.render(hbs`{{number-to-english number=12}}`);
  assert.equal(this.$().text().trim(), 'twelve');

  this.render(hbs`{{number-to-english number=16}}`);
  assert.equal(this.$().text().trim(), 'sixteen');

  this.render(hbs`{{number-to-english number=25}}`);
  assert.equal(this.$().text().trim(), 'twenty five');

  this.render(hbs`{{number-to-english number=53}}`);
  assert.equal(this.$().text().trim(), 'fifty three');

  this.render(hbs`{{number-to-english number=70}}`);
  assert.equal(this.$().text().trim(), 'seventy');
});

test('it returns correct words for three digit numbers', function(assert) {
  this.render(hbs`{{number-to-english number=100}}`);
  assert.equal(this.$().text().trim(), 'one hundred');

  this.render(hbs`{{number-to-english number=111}}`);
  assert.equal(this.$().text().trim(), 'one hundred and eleven');

  this.render(hbs`{{number-to-english number=346}}`);
  assert.equal(this.$().text().trim(), 'three hundred and forty six');

  this.render(hbs`{{number-to-english number=672}}`);
  assert.equal(this.$().text().trim(), 'six hundred and seventy two');

  this.render(hbs`{{number-to-english number=813}}`);
  assert.equal(this.$().text().trim(), 'eight hundred and thirteen');

  this.render(hbs`{{number-to-english number=999}}`);
  assert.equal(this.$().text().trim(), 'nine hundred and ninety nine');
});

test('it returns correct words for four digit numbers', function(assert) {
  this.render(hbs`{{number-to-english number=1000}}`);
  assert.equal(this.$().text().trim(), 'one thousand');

  this.render(hbs`{{number-to-english number=1456}}`);
  assert.equal(this.$().text().trim(), 'one thousand four hundred and fifty six');

  this.render(hbs`{{number-to-english number=3902}}`);
  assert.equal(this.$().text().trim(), 'three thousand nine hundred and two');

  this.render(hbs`{{number-to-english number=1672}}`);
  assert.equal(this.$().text().trim(), 'one thousand six hundred and seventy two');

  this.render(hbs`{{number-to-english number=9999}}`);
  assert.equal(this.$().text().trim(), 'nine thousand nine hundred and ninety nine');
});

test('it returns correct words for five digit numbers', function(assert) {
  this.render(hbs`{{number-to-english number=10000}}`);
  assert.equal(this.$().text().trim(), 'ten thousand');

  this.render(hbs`{{number-to-english number=92345}}`);
  assert.equal(this.$().text().trim(), 'ninety two thousand three hundred and forty five');
});

test('it returns correct words for six digit numbers', function(assert) {
  this.render(hbs`{{number-to-english number=100000}}`);
  assert.equal(this.$().text().trim(), 'one hundred thousand');

  this.render(hbs`{{number-to-english number=912345}}`);
  assert.equal(this.$().text().trim(), 'nine hundred and twelve thousand three hundred and forty five');
});

test('it returns correct words for seven digit numbers', function(assert) {
  this.render(hbs`{{number-to-english number=1000000}}`);
  assert.equal(this.$().text().trim(), 'one million');

  this.render(hbs`{{number-to-english number=9123456}}`);
  assert.equal(this.$().text().trim(), 'nine million one hundred and twenty three thousand four hundred and fifty six');
});
