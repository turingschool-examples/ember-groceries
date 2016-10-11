import { moduleForComponent, test, skip } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('filter-button', 'Integration | Component | filter button', {
  integration: true
});

skip('it renders', function(assert) {
  this.render(hbs`{{filter-button}}`);
  assert.equal(this.$().text().trim(), '');
  
  this.render(hbs`
    {{#filter-button}}
      template block text
    {{/filter-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
