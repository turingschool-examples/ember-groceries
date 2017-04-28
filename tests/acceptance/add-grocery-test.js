import { test, skip } from 'qunit';
import moduleForAcceptance from 'ember-groceries/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | add grocery', {});

test('should add a grocery on submit with valid input', function(assert) {
  window.localStorage.clear()
  // when I visit the root page
  visit('/');

  // and I enter values for name, quantity, and notes
  fillIn('.spec-input-name', 'Banana')
  fillIn('.spec-input-quantity', 'One Bunch')
  fillIn('.spec-textarea-notes', 'Only extra green ones')

  // and I click submit
  click('.add-grocery--submit')

  // then I expect to see a grocery item with those values
  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.equal(find('.grocery-item').length, 1, 'should show 1 grocery')
    assert.equal(find('h3').text(), 'Banana', 'should list grocery name')
    // you would continue to check the quantity and notes html elements here as well for a thoroughly robust test
  });


});

test('should remove grocery when user clicks remove', function(assert) {
  window.localStorage.clear()
  // When a user visits '/'
  visit('/')

  // And fills in the form
  fillIn('.spec-input-name', 'banana')
  fillIn('.spec-input-quantity', 'seven bunches')
  fillIn('.spec-textarea-notes', 'a lot of them')

  // And clicks submit
  click('.add-grocery--submit')

  // Then there is a grocery item displayed
  andThen(function() {
    assert.equal(find('.grocery-item').length, 1, 'shows one item')
  })

  // And it has the expected values

  // And when a user clicks "Remove"
  click('.remove-button')

  // Then there is no longer a grocery item displayed
  andThen(function() {
    assert.equal(find('.grocery-item').length, 0, 'shows zero items')
  })
})

skip('should toggle purchased status when user clicks on purchase', function(assert) {
  // When a user visits '/'

  // And fills in the form

  // The grocery item starts with a status of "Unpurchased"

  // And when a user clicks a button with the text "Purchase"

  // The item's status changes to "Purchased"

  // And when a user clicks a button with the text "Unpurchase"

  // The item's status changes back to "Unpurchase"
})

skip('should toggle starred status when use clicks on star', function(assert) {
})

skip('should show only starred items when show starred is selected', function(assert) {
})

skip('should show only purchased items when Show Purchased is selected', function(assert) {
})

skip('should show only unpurchased items when Show Unpurchased is selected', function(assert) {
})

skip('should show all items after a filter is applied and Show All is selected')
