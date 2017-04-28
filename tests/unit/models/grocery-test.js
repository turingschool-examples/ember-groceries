import { moduleForModel, test, skip } from 'ember-qunit';

moduleForModel('grocery', 'Unit | Model | grocery', {
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  assert.ok(!!model);
});

test('should return undefined without valid input', function(assert) {
  const grocery = this.subject({})

  assert.equal(grocery.get('name'), undefined, 'grocery attributes throw error if empty')
})


test('should return default values for starred and purchased', function(assert) {
  const grocery = this.subject({})

  const starredDefault = grocery.get('starred')

  assert.equal(starredDefault, false, 'starred is set to false by default')

  assert.equal(grocery.get('purchased'), false, 'purchased is set to false by default')
});

test('unpurchased should return the opposite of purchased', function(assert) {
  const grocery = this.subject({})

  assert.equal(grocery.get('purchased'), false, 'purchased is set to false')

  assert.equal(grocery.get('unpurchased'), true, 'unpurchased is set to true')

})
