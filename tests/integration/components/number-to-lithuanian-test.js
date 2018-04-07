import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('number-to-lithuanian', 'Integration | Component | number to lithuanian', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{number-to-lithuanian number=''}}`);

  assert.equal(this.$().text().trim(), '');
});

// words testing
test('it returns correct words for single digit numbers', function(assert) {
  this.render(hbs`{{number-to-lithuanian number=0}}`);
  assert.equal(this.$().text().trim(), 'nulis');

  this.render(hbs`{{number-to-lithuanian number=1}}`);
  assert.equal(this.$().text().trim(), 'vienas');

  this.render(hbs`{{number-to-lithuanian number=5}}`);
  assert.equal(this.$().text().trim(), 'penki');

  this.render(hbs`{{number-to-lithuanian number=9}}`);
  assert.equal(this.$().text().trim(), 'devyni');
});

test('it returns correct words for double digit numbers', function(assert) {
  this.render(hbs`{{number-to-lithuanian number=10}}`);
  assert.equal(this.$().text().trim(), 'dešimt');

  this.render(hbs`{{number-to-lithuanian number=11}}`);
  assert.equal(this.$().text().trim(), 'vienuolika');

  this.render(hbs`{{number-to-lithuanian number=12}}`);
  assert.equal(this.$().text().trim(), 'dvylika');

  this.render(hbs`{{number-to-lithuanian number=16}}`);
  assert.equal(this.$().text().trim(), 'šešiolika');

  this.render(hbs`{{number-to-lithuanian number=25}}`);
  assert.equal(this.$().text().trim(), 'dvidešimt penki');

  this.render(hbs`{{number-to-lithuanian number=53}}`);
  assert.equal(this.$().text().trim(), 'penkiasdešimt trys');

  this.render(hbs`{{number-to-lithuanian number=70}}`);
  assert.equal(this.$().text().trim(), 'septyniasdešimt');
});

test('it returns correct words for three digit numbers', function(assert) {
  this.render(hbs`{{number-to-lithuanian number=100}}`);
  assert.equal(this.$().text().trim(), 'vienas šimtas');

  this.render(hbs`{{number-to-lithuanian number=111}}`);
  assert.equal(this.$().text().trim(), 'vienas šimtas vienuolika');

  this.render(hbs`{{number-to-lithuanian number=346}}`);
  assert.equal(this.$().text().trim(), 'trys šimtai keturiasdešimt šeši');

  this.render(hbs`{{number-to-lithuanian number=672}}`);
  assert.equal(this.$().text().trim(), 'šeši šimtai septyniasdešimt du');

  this.render(hbs`{{number-to-lithuanian number=813}}`);
  assert.equal(this.$().text().trim(), 'aštuoni šimtai trylika');

  this.render(hbs`{{number-to-lithuanian number=999}}`);
  assert.equal(this.$().text().trim(), 'devyni šimtai devyniasdešimt devyni');
});

test('it returns correct words for four digit numbers', function(assert) {
  this.render(hbs`{{number-to-lithuanian number=1000}}`);
  assert.equal(this.$().text().trim(), 'vienas tūkst.');

  this.render(hbs`{{number-to-lithuanian number=1456}}`);
  assert.equal(this.$().text().trim(), 'vienas tūkst. keturi šimtai penkiasdešimt šeši');

  this.render(hbs`{{number-to-lithuanian number=3902}}`);
  assert.equal(this.$().text().trim(), 'trys tūkst. devyni šimtai du');

  this.render(hbs`{{number-to-lithuanian number=1672}}`);
  assert.equal(this.$().text().trim(), 'vienas tūkst. šeši šimtai septyniasdešimt du');

  this.render(hbs`{{number-to-lithuanian number=9999}}`);
  assert.equal(this.$().text().trim(), 'devyni tūkst. devyni šimtai devyniasdešimt devyni');
});

test('it returns correct words for five digit numbers', function(assert) {
  this.render(hbs`{{number-to-lithuanian number=10000}}`);
  assert.equal(this.$().text().trim(), 'dešimt tūkst.');

  this.render(hbs`{{number-to-lithuanian number=92345}}`);
  assert.equal(this.$().text().trim(), 'devyniasdešimt du tūkst. trys šimtai keturiasdešimt penki');
});

test('it returns correct words for six digit numbers', function(assert) {
  this.render(hbs`{{number-to-lithuanian number=100000}}`);
  assert.equal(this.$().text().trim(), 'vienas šimtas tūkst.');

  this.render(hbs`{{number-to-lithuanian number=912345}}`);
  assert.equal(this.$().text().trim(), 'devyni šimtai dvylika tūkst. trys šimtai keturiasdešimt penki');
});

test('it returns correct words for seven digit numbers', function(assert) {
  this.render(hbs`{{number-to-lithuanian number=1000000}}`);
  assert.equal(this.$().text().trim(), 'vienas mln.');

  this.render(hbs`{{number-to-lithuanian number=9123456}}`);
  assert.equal(this.$().text().trim(), 'devyni mln. vienas šimtas dvidešimt trys tūkst. keturi šimtai penkiasdešimt šeši');
});
