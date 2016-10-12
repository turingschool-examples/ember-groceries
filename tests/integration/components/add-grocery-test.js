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

test('it renders with an updated quantity value when provided',
function(assert){

})

test('it renders with an updated notes value when provided',
function(assert){
})

test('it renders as a section with a class of add-grocery', function(assert){
  this.render(hbs`{{add-grocery}}`)

  assert.equal(this.$('section').attr('class'), 'ember-view add-grocery', 'has a classname of add-grocery')
})

test('should render a form with labels and a button', function(assert){

})

test('should trigger createGrocery on form submit', function(assert){
  this.set('externalAction', (actual) => {
    let expected = { name: 'Banana', quantity: 'one', notes: 'i love bananas'}
    assert.deepEqual(actual, expected, 'submitted value is passed to external action')
  })

  this.render(hbs`{{add-grocery createGrocery=(action externalAction)}}`)

  this.$('.spec-input-name').val('Pears')
  this.$('.spec-input-name').change()
  this.$('.spec-input-quantity').val('one')
  this.$('.spec-input-quantity').change()
  this.$('.spec-textarea-notes').val('i love bananas')
  this.$('.spec-textarea-notes').change()

  this.$('button').click()
})
