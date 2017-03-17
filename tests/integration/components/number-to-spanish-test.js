import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('number-to-spanish', 'Integration | Component | number to spanish', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{number-to-spanish number=''}}`);

  assert.equal(this.$().text().trim(), '');
});

// words testing
test('it returns correct words for single digit numbers', function(assert) {
  this.render(hbs`{{number-to-spanish number=0}}`);
  assert.equal(this.$().text().trim(), 'cero');

  this.render(hbs`{{number-to-spanish number=1}}`);
  assert.equal(this.$().text().trim(), 'un');

  this.render(hbs`{{number-to-spanish number=5}}`);
  assert.equal(this.$().text().trim(), 'cinco');

  this.render(hbs`{{number-to-spanish number=9}}`);
  assert.equal(this.$().text().trim(), 'nueve');
});

test('it returns correct words for double digit numbers', function(assert) {
  this.render(hbs`{{number-to-spanish number=10}}`);
  assert.equal(this.$().text().trim(), 'diez');

  this.render(hbs`{{number-to-spanish number=11}}`);
  assert.equal(this.$().text().trim(), 'once');

  this.render(hbs`{{number-to-spanish number=12}}`);
  assert.equal(this.$().text().trim(), 'doce');

  this.render(hbs`{{number-to-spanish number=16}}`);
  assert.equal(this.$().text().trim(), 'dieciseis');

  this.render(hbs`{{number-to-spanish number=25}}`);
  assert.equal(this.$().text().trim(), 'veinticinco');

  this.render(hbs`{{number-to-spanish number=53}}`);
  assert.equal(this.$().text().trim(), 'cincuenta y tres');

  this.render(hbs`{{number-to-spanish number=70}}`);
  assert.equal(this.$().text().trim(), 'setenta');

  this.render(hbs`{{number-to-spanish number=71}}`);
  assert.equal(this.$().text().trim(), 'setenta y un');

  this.render(hbs`{{number-to-spanish number=91}}`);
  assert.equal(this.$().text().trim(), 'noventa y un');
});

test('it returns correct words for three digit numbers', function(assert) {
  this.render(hbs`{{number-to-spanish number=100}}`);
  assert.equal(this.$().text().trim(), 'cien');

  this.render(hbs`{{number-to-spanish number=111}}`);
  assert.equal(this.$().text().trim(), 'ciento once');

  this.render(hbs`{{number-to-spanish number=346}}`);
  assert.equal(this.$().text().trim(), 'trescientos cuarenta y seis');

  this.render(hbs`{{number-to-spanish number=300}}`);
  assert.equal(this.$().text().trim(), 'trescientos');

  this.render(hbs`{{number-to-spanish number=672}}`);
  assert.equal(this.$().text().trim(), 'seiscientos setenta y dos');

  this.render(hbs`{{number-to-spanish number=813}}`);
  assert.equal(this.$().text().trim(), 'ochocientos trece');

  this.render(hbs`{{number-to-spanish number=999}}`);
  assert.equal(this.$().text().trim(), 'novecientos noventa y nueve');
});

test('it returns correct words for four digit numbers', function(assert) {
  this.render(hbs`{{number-to-spanish number=1000}}`);
  assert.equal(this.$().text().trim(), 'mil');

  this.render(hbs`{{number-to-spanish number=1456}}`);
  assert.equal(this.$().text().trim(), 'mil cuatrocientos cincuenta y seis');

  this.render(hbs`{{number-to-spanish number=3902}}`);
  assert.equal(this.$().text().trim(), 'tres mil novecientos dos');

  this.render(hbs`{{number-to-spanish number=672}}`);
  assert.equal(this.$().text().trim(), 'seiscientos setenta y dos');

  this.render(hbs`{{number-to-spanish number=9999}}`);
  assert.equal(this.$().text().trim(), 'nueve mil novecientos noventa y nueve');
});

test('it returns correct words for five digit numbers', function(assert) {
  this.render(hbs`{{number-to-spanish number=10000}}`);
  assert.equal(this.$().text().trim(), 'diez mil');

  this.render(hbs`{{number-to-spanish number=92345}}`);
  assert.equal(this.$().text().trim(), 'noventa y dos mil trescientos cuarenta y cinco');
});

test('it returns correct words for six digit numbers', function(assert) {
  this.render(hbs`{{number-to-spanish number=100000}}`);
  assert.equal(this.$().text().trim(), 'cien mil');

  this.render(hbs`{{number-to-spanish number=912345}}`);
  assert.equal(this.$().text().trim(), 'novecientos doce mil trescientos cuarenta y cinco');
});

test('it returns correct words for seven digit numbers', function(assert) {
  this.render(hbs`{{number-to-spanish number=1000000}}`);
  assert.equal(this.$().text().trim(), 'un millon');

  this.render(hbs`{{number-to-spanish number=9123456}}`);
  assert.equal(this.$().text().trim(), 'nueve millones ciento veintitres mil cuatrocientos cincuenta y seis');
});
