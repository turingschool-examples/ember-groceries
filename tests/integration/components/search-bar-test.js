import { moduleForComponent, test, skip } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('search-bar', 'Integration | Component | search bar', {
  integration: true
});

skip('it renders', function(assert) {
  this.render(hbs`{{search-bar}}`);
  assert.equal(this.$().text().trim(), '');
  this.render(hbs`
    {{#search-bar}}
      template block text
    {{/search-bar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
