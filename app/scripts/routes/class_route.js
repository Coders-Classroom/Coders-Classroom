CodersClassroom.ClassRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('class', params.class_id);
  }
});

