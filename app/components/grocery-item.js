import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    remove() {
      this.get('grocery').destroyRecord();
    }
  }
});
