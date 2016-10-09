import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['filter'],
  filter: null,

  groceries: Ember.computed('filter', function() {
    const filter = this.get('filter');
    const groceries = this.get('model');

    if (!filter) { return groceries; }
    return groceries.filterBy(filter, true);

  }),

  actions: {
    setFilter(filter) {
      this.set('filter', filter);
    }
  }
});
