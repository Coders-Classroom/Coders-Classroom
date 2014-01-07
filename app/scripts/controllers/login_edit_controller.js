CodersClassroom.LoginEditController = Ember.ObjectController.extend({
  needs: 'login',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.login.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('login',this.get('model'));
    }
  }
});

