import { moduleForComponent, test, skip } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('add-grocery', 'Integration | Component | add grocery', {
  integration: true
});

test('it renders with default string properties', function(assert){
  this.render(hbs`{{add-grocery}}`)

  assert.equal(this.$('.spec-input-name').text(), '', 'starts with an empty string in name property')

  // test quantity, and notes here
})

test('it renders with an updated name value when provided',
function(assert){

  this.set('name', 'hello world')

  this.render(hbs`{{add-grocery name=name}}`)

  assert.equal(this.$('.spec-input-name').val(), 'hello world', 'updates with provided value')
})

skip('it renders with an updated quantity value when provided',
function(assert){
})

skip('it renders with an updated notes value when provided',
function(assert){
})

skip('it renders as a section with a class of add-grocery', function(assert){
})

skip('should render a form with labels and a button', function(assert){
})

skip('should trigger createGrocery on form submit', function(assert){
})
