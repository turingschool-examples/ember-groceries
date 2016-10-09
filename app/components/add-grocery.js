import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  name: '',
  quantity: '',
  notes: '',

  actions: {
    createGrocery() {
      const grocery = this.getProperties('name', 'quantity', 'notes');
      this.get('store').createRecord('grocery', grocery).save();
    }
  }
});
