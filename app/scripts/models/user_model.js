/*global Ember*/
CodersClassroom.User = DS.Model.extend({
    login: DS.attr('string'),

    name: DS.attr('string'),

    server: DS.attr('string')
});

// probably should be mixed-in...
CodersClassroom.User.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
CodersClassroom.User.FIXTURES = [
  
  {
    id: 0,
    
    login: 'foo',
    
    name: 'foo',
    
    server: 'foo'
    
  },
  
  {
    id: 1,
    
    login: 'foo',
    
    name: 'foo',
    
    server: 'foo'
    
  }
  
];
