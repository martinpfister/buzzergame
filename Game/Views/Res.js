Game.Views.Res = Backbone.View.extend({
  tagName     : 'ul',
  id          : 'auswahl',
  template    : Game.Template('res'),

  screen: 0,

  initialize: function() {
    _.bindAll(this, 'render', 'next');
    $(document).bind('keypress', this.next);
    console.log('res ini');
  },

  destroy_view: function() {

    $('.resText, .resCategory, .resImage').remove();
    this.remove();
    this.unbind();
    Game.Data.selectedAnimalsCollection = new Game.Collections.Selected([
        {},
        {},
        {}
    ]);
    this.screen = 0;
    $(document).unbind('keypress');

  },

  next: function(){

    if (this.screen === 0) {
      Game.Rendered.selectedView.destroy_view();
    }
    this.render();
  
  },

  render: function(){

    if (this.screen === 3) {

      Game.Rendered.Router.navigate('start', {trigger: true});

    } else {
      $('#buzzer, #deinewahl, #erfahremehr').remove();
      $('.resText, .resCategory, .resImage').remove();
      var aktRes = this.collection.models[this.screen];
      var dict = aktRes.toJSON();
      var resModelView = this.template(dict);

      $(document.body).append(resModelView);

      this.screen++;

    }
  }
});
