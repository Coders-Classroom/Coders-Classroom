CodersClassroom.LoginsRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('login');
  }
});

