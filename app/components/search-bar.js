import Ember from 'ember';

export default Ember.Component.extend({

  /* We don't need this but it can illustrate how the closure action is executed
   * invoked with a quoted string, see components/search-bar.hbs
   *
   * actions: {
   *   searchFieldChanged() {
   *     this.get("searchUpdated")(this.get("value"));
   *   }
   * }
   */
});
