import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['filter', 'search'],

  filter: null,
  search: null,

  groceries: Ember.computed('filter', 'search', function() {
    const filter = this.get('filter');
    const search = this.get('search');

    let groceries = this.get('model');

    if (filter) {
      groceries = groceries.filterBy(filter, true);
    }

    if (search) {
      groceries = groceries.filter(grocery => {
        return grocery.get('name')
                      .toLowerCase()
                      .match(search);
      });
    }

    return groceries;
  }),

  actions: {
    setFilter(filter) {
      this.set('filter', filter);
    },
    updateSearch(search) {
      this.set('search', search && search.toLowerCase());
    }
  }
});
