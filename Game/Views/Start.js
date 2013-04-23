Game.Views.Start = Backbone.View.extend({
  tagName     : 'div',
  className   : 'start',
  template    : Game.Template('start'),

  screen: 1,

  initialize: function() {

    _.bindAll(this, 'render', 'next');
    $(document).bind('keypress', this.next);

    var toggel = this.collection.at(0).toJSON();
    //console.log(toggel);
    $(document.body).append(this.template(toggel));

  },

  next: function (event){

    var keycode = (event.keyCode ? event.keyCode : event.which);

    if(keycode == '13') {
        this.screen++;
        this.render();
    }

  },

  destroy_view: function() {

    $('.start').remove();
    this.remove();
    this.unbind();
    $(document).unbind('keypress');
    this.screen = 1;

  },

  render: function(){

    this.collection.each(function(slide, i) {

      if (slide.attributes.screen === this.screen) {
        var dict = slide.toJSON();

        var startModelView = this.template(dict);
        $(document.body).append(startModelView);
      }

      i++;
    }, this);

    if (this.screen === 1) {
        $('#welchestier').addClass('visible');
    }
    if (this.screen === 2) {
        $('#welchestier').remove();
        $('#buzzer').remove();

        $('#waehledrei').addClass('visible');

        setTimeout(function() {
           $('#waehledrei').remove();
           $('#achtung').addClass('visible');
        }, 2000);
    //}
    //if (this.screen === 3) { 
        setTimeout(function() {
            $('#fertig').addClass('visible');
        }, 2500);
        setTimeout(function() {
            $('#los').addClass('visible');
        }, 3000);
        setTimeout(function() {
            Game.Rendered.Router.navigate('play', {trigger: true});
        }, 3500);
    }
    return this;

  }

});