import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('number-to-french', 'Integration | Component | number to french', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{number-to-french number=''}}`);

  assert.equal(this.$().text().trim(), '');
});

// words testing
test('it returns correct words for single digit numbers', function(assert) {
  this.render(hbs`{{number-to-french number=0}}`);
  assert.equal(this.$().text().trim(), 'zéro');

  this.render(hbs`{{number-to-french number=1}}`);
  assert.equal(this.$().text().trim(), 'un');

  this.render(hbs`{{number-to-french number=5}}`);
  assert.equal(this.$().text().trim(), 'cinq');

  this.render(hbs`{{number-to-french number=9}}`);
  assert.equal(this.$().text().trim(), 'neuf');
});

test('it returns correct words for double digit numbers', function(assert) {
  this.render(hbs`{{number-to-french number=10}}`);
  assert.equal(this.$().text().trim(), 'dix');

  this.render(hbs`{{number-to-french number=11}}`);
  assert.equal(this.$().text().trim(), 'onze');

  this.render(hbs`{{number-to-french number=12}}`);
  assert.equal(this.$().text().trim(), 'douze');

  this.render(hbs`{{number-to-french number=16}}`);
  assert.equal(this.$().text().trim(), 'seize');

  this.render(hbs`{{number-to-french number=25}}`);
  assert.equal(this.$().text().trim(), 'vingt-cinq');

  this.render(hbs`{{number-to-french number=53}}`);
  assert.equal(this.$().text().trim(), 'cinquante-trois');

  this.render(hbs`{{number-to-french number=70}}`);
  assert.equal(this.$().text().trim(), 'soixante-dix');

  this.render(hbs`{{number-to-french number=71}}`);
  assert.equal(this.$().text().trim(), 'soixante et onze');

  this.render(hbs`{{number-to-french number=91}}`);
  assert.equal(this.$().text().trim(), 'quatre-vingt-onze');
});

test('it returns correct words for three digit numbers', function(assert) {
  this.render(hbs`{{number-to-french number=100}}`);
  assert.equal(this.$().text().trim(), 'cent');

  this.render(hbs`{{number-to-french number=111}}`);
  assert.equal(this.$().text().trim(), 'cent onze');

  this.render(hbs`{{number-to-french number=346}}`);
  assert.equal(this.$().text().trim(), 'trois cent quarante-six');

  this.render(hbs`{{number-to-french number=300}}`);
  assert.equal(this.$().text().trim(), 'trois cents');

  this.render(hbs`{{number-to-french number=672}}`);
  assert.equal(this.$().text().trim(), 'six cent soixante-douze');

  this.render(hbs`{{number-to-french number=813}}`);
  assert.equal(this.$().text().trim(), 'huit cent treize');

  this.render(hbs`{{number-to-french number=999}}`);
  assert.equal(this.$().text().trim(), 'neuf cent quatre-vingt-dix-neuf');
});

test('it returns correct words for four digit numbers', function(assert) {
  this.render(hbs`{{number-to-french number=1000}}`);
  assert.equal(this.$().text().trim(), 'mille');

  this.render(hbs`{{number-to-french number=1456}}`);
  assert.equal(this.$().text().trim(), 'mille quatre cent cinquante-six');

  this.render(hbs`{{number-to-french number=3902}}`);
  assert.equal(this.$().text().trim(), 'trois milles neuf cent deux');

  this.render(hbs`{{number-to-french number=672}}`);
  assert.equal(this.$().text().trim(), 'six cent soixante-douze');

  this.render(hbs`{{number-to-french number=9999}}`);
  assert.equal(this.$().text().trim(), 'neuf milles neuf cent quatre-vingt-dix-neuf');
});

test('it returns correct words for five digit numbers', function(assert) {
  this.render(hbs`{{number-to-french number=10000}}`);
  assert.equal(this.$().text().trim(), 'dix milles');

  this.render(hbs`{{number-to-french number=92345}}`);
  assert.equal(this.$().text().trim(), 'quatre-vingt-douze milles trois cent quarante-cinq');
});

test('it returns correct words for six digit numbers', function(assert) {
  this.render(hbs`{{number-to-french number=100000}}`);
  assert.equal(this.$().text().trim(), 'cent milles');

  this.render(hbs`{{number-to-french number=912345}}`);
  assert.equal(this.$().text().trim(), 'neuf cent douze milles trois cent quarante-cinq');
});

test('it returns correct words for seven digit numbers', function(assert) {
  this.render(hbs`{{number-to-french number=1000000}}`);
  assert.equal(this.$().text().trim(), 'un million');

  this.render(hbs`{{number-to-french number=9123456}}`);
  assert.equal(this.$().text().trim(), 'neuf millions cent vingt-trois milles quatre cent cinquante-six');
});
