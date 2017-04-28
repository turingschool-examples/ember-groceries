import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  quantity: DS.attr('string'),
  notes: DS.attr('string'),
  starred: DS.attr('boolean', { defaultValue: false }),
  purchased: DS.attr('boolean', { defaultValue: false }),

  unpurchased: Ember.computed('purchased', function() {
    return !this.get('purchased');
  })

});
