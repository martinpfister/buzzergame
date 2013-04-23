Game.Views.Res = Backbone.View.extend({
  tagName     : 'ul',
  id          : 'auswahl',
  template    : Game.Template('res'),

  screen: 0,

  initialize: function() {
    _.bindAll(this, 'render', 'next');
    $(document).bind('keypress', this.next);
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
    console.log('hitting enter on res');
    this.render();
  },

  render: function(){
    console.log('aktscreen');
    console.log(this.screen);
    console.log('thiscollection')
    console.log(this.collection);
    console.log('selectedcollection');
    console.log(Game.Data.selectedAnimalsCollection);
    if (this.screen === 3) {

      Game.Rendered.Router.navigate('', {trigger: true});

    } else {
      $('.resText, .resCategory, .resImage').remove();
      var aktRes = this.collection.models[this.screen];
      var dict = aktRes.toJSON();
      var resModelView = this.template(dict);

      $(document.body).append(resModelView);

      this.screen++;

    }
  }
});
