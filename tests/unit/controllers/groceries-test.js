import { moduleFor, test, skip } from 'ember-qunit';

moduleFor('controller:groceries', 'Unit | Controller | groceries', {
});

skip('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});

skip('should update filter property on appropriate actions', function(assert) {
  assert.expect(2)

  const ctrl = this.subject()

  assert.equal(ctrl.get('filter'), null, 'filter defaults to null')

  ctrl.send('setFilter', 'starred')

  assert.equal(ctrl.get('filter'), 'starred', 'filter updated to starred')
})

skip('should update search properties on appropriate action action', function(assert){
})

skip('should return only starred groceries when filter is applied', function(assert){
})

skip('should return only groceries with search term', function(assert){
})
