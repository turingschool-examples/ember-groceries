import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['filter'],

  filter: null,
  searchString: null,

  groceries: Ember.computed('filter', 'searchString', function() {
    const filter = this.get('filter');
    const searchString = this.get('searchString');

    let groceries = this.get('model');

    if (filter) {
      groceries = groceries.filterBy(filter, true);
    }

    if (searchString) {
      groceries = groceries.filter(grocery => {
        const term = searchString.toLowerCase();
        return grocery.get('name')
                      .toLowerCase()
                      .match(term);
      });
    }

    return groceries;
  }),

  actions: {
    setFilter(filter) {
      this.set('filter', filter);
    }
  }
});
