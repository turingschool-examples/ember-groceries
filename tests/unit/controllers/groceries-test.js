import { moduleFor, test, skip } from 'ember-qunit';

moduleFor('controller:groceries', 'Unit | Controller | groceries', {
});

skip('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});

skip('should update filter property on appropriate actions', function(assert) {
  // assert that at the end of the day, you are making two "assertions" in this test
  assert.expect(2)

  // create a new instance of your controller to run tests on
  const ctrl = this.subject()

  // assert that the default value of filter is what you expect
  assert.equal(ctrl.get('filter'), null, 'filter defaults to null')

  // call an appropriate action
  ctrl.send('setFilter', 'starred')

  // assert that a particular property has been updated
  assert.equal(ctrl.get('filter'), 'starred', 'filter updated to starred')
})

skip('should update search properties on appropriate action action', function(assert){
})

skip('should return only starred groceries when filter is applied', function(assert){
})

skip('should return only groceries with search term', function(assert){
})
