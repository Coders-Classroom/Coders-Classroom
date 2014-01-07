CodersClassroom.LoginRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('login', params.login_id);
  }
});

