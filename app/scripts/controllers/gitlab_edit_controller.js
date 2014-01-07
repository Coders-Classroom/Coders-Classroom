CodersClassroom.GitlabEditController = Ember.ObjectController.extend({
  needs: 'gitlab',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.gitlab.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('gitlab',this.get('model'));
    }
  }
});

