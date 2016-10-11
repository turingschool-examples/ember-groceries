import { moduleFor, test, skip } from 'ember-qunit';

moduleFor('controller:groceries', 'Unit | Controller | groceries', {
});

test('it exists', function(assert) {
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

skip('should update search properties on action', function(assert){
})

test('should return only starred groceries when filter is applied', function(assert){
  const ctrl = this.subject()
  const groceryList = [
    {
      name: 'grocery-name',
      quantity: 'one bunch',
      notes: '',
      starred: false
    },
    {
      name: 'grocery-name-2',
      quantity: 'one bunch',
      notes: '',
      starred: true
    }
  ]

  ctrl.set('model', groceryList)

  assert.equal(ctrl.get('groceries').length, 2, 'starts with two groceries')

  ctrl.set('filter', 'starred')
  assert.equal(ctrl.get('filter'), 'starred', 'filter updated to starred')
  assert.equal(ctrl.get('groceries').length, 1, 'filters to one grocery item with starred prop')
})

test('should return only groceries with search term', function(assert){
  const ctrl = this.subject()
  const groceryList = [
    {
      name: 'meat',
      quantity: 'lion',
      notes: '',
      starred: false
    },
    {
      name: 'flowers',
      quantity: 'one bunch',
      notes: '',
      starred: true
    }
  ]

  ctrl.set('model', groceryList)

  assert.equal(ctrl.get('groceries').length, 2, 'starts with two groceries')

  ctrl.set('search', 'meat')
  assert.equal(ctrl.get('groceries').length, 1, 'filters to one grocery item with search value')

})
