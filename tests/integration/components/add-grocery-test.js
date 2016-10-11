import { moduleForComponent, test, skip } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('add-grocery', 'Integration | Component | add grocery', {
  integration: true
});

skip('it renders', function(assert) {
  this.render(hbs`{{add-grocery}}`);
  assert.equal(this.$().text().trim(), '');

  this.render(hbs`
    {{#add-grocery}}
      template block text
    {{/add-grocery}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
