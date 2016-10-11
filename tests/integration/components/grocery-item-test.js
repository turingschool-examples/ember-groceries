import { moduleForComponent, test, skip } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('grocery-item', 'Integration | Component | grocery item', {
  integration: true
});

skip('it renders', function(assert) {
  this.render(hbs`{{grocery-item}}`);
  assert.equal(this.$().text().trim(), '');

  this.render(hbs`
    {{#grocery-item}}
      template block text
    {{/grocery-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
