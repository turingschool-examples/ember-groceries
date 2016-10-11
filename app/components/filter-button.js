import Ember from 'ember';

export default Ember.Component.extend({

  // Check this sweet hack to work around the fact that components wrap their
  // template in `<div>` tags and break the line between buttons

  tagName: 'span'
});
