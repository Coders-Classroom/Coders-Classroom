CodersClassroom.ClassEditController = Ember.ObjectController.extend({
  needs: 'class',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.class.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('class',this.get('model'));
    }
  }
});

