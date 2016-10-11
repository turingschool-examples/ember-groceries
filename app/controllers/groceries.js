import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['filter', 'search'],

  filter: null,
  search: null,

  filterIsAll: Ember.computed.not('filter'),
  filterIsStarred: Ember.computed.equal('filter', 'starred'),
  filterIsPurchased: Ember.computed.equal('filter', 'purchased'),
  filterIsUnpurchased: Ember.computed.equal('filter', 'unpurchased'),

  // Exercise for the reader: Why doesn't the list update when you change the
  // list item's status from "purchased" to "unpurchased", etc.?
  //
  // How can we fix this?
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
