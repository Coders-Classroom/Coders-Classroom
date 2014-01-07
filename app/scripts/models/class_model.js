/*global Ember*/
CodersClassroom.Class = DS.Model.extend({
    title: DS.attr('string'),

    description: DS.attr('string'),

    gitUrl: DS.attr('string')
});

// probably should be mixed-in...
CodersClassroom.Class.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
CodersClassroom.Class.FIXTURES = [
  
  {
    id: 0,
    
    title: 'foo',
    
    description: 'foo',
    
    gitUrl: 'foo'
    
  },
  
  {
    id: 1,
    
    title: 'foo',
    
    description: 'foo',
    
    gitUrl: 'foo'
    
  }
  
];
