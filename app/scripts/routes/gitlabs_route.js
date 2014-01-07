CodersClassroom.GitlabsRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('gitlab');
  }
});

