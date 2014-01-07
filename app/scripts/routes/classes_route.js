CodersClassroom.ClassesRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('class');
  }
});

