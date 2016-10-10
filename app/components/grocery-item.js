import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'article',
  classNames: ['grocery-item'],

  actions: {
    purchase() {
      const purchased = this.get('grocery.purchased');
      this.set('grocery.purchased', !purchased);
      this.get('grocery').save();
    },
    star() {
      const starred = this.get('grocery.starred');
      this.set('grocery.starred', !starred);
      this.get('grocery').save();
    },
    remove() {
      this.get('grocery').destroyRecord();
    }
  }
});
