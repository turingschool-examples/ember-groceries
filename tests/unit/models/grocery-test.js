import { moduleForModel, test } from 'ember-qunit';

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
  const grocery = this.subject({
    name: 'grocery-name',
    quantity: 'one bunch',
    notes: ''
  });


  assert.equal(grocery.get('purchased'), false, 'grocery defaults to purchased: false');
  assert.equal(grocery.get('starred'), false, 'grocery defaults to starred: false');
});


test('unpurchased should return the opposite of purchased', function(assert) {
  const grocery = this.subject()

  assert.equal(grocery.get('purchased'), false, 'grocery defaults to purchased: false')

  assert.equal(grocery.get('unpurchased'), true)
})
