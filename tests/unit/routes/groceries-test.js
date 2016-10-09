import { moduleFor, test } from 'ember-qunit';

moduleFor('route:groceries', 'Unit | Route | groceries', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
