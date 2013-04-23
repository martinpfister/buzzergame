Game.Views.Slide = Backbone.View.extend({
  tagName     : 'li',
  className   : 'slide',
  template    : Game.Template('slide'),

  initialize: function() {
    _.bindAll(this, 'test');
   this.model.on('change:selected', this.test, this)
  },

  test : function() {
    console.log('test mediator on change slide');
  },
  
  render: function(){

    // This is a dictionary object of the attributes of the models.
    var dict = this.model.toJSON();
    // Set the ID
    $(this.el).attr('id', 'slide-'+dict.uid); 
    // Append the result to the view's element.
    this.$el.html( this.template(dict));

    return this;

  }

});