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


skip('should return default values for starred and purchased', function(assert) {
});


skip('unpurchased should return the opposite of purchased', function(assert) {
})
