CodersClassroom.GitlabRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('gitlab', params.gitlab_id);
  }
});

