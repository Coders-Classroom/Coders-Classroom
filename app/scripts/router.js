CodersClassroom.Router.map(function () {
  
  this.resource('classes', function(){
    this.resource('class', { path: '/:class_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });
  
  this.resource('users', function(){
    this.resource('user', { path: '/:user_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });
  
});
