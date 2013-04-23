Game.Views.Selected = Backbone.View.extend({
  tagName     : 'ul',
  id          : 'selected',
  template    : Game.Template('selected'),

  counter     : 1,

  initialize: function() {
    _.bindAll(this, 'render', 'add_selected');
     Game.Mediator.subscribe('selected', this.add_selected);
    //TODO on change re render resp. on add
  },

  destroy_view: function() {
    $('#selected').remove();
    this.remove();
    this.unbind();
    this.counter = 1;
  },

  add_selected : function(current) {
    var check = this.collection.where({uid: current.get('uid')});
    //Tier noch nicht in der collection?
    if (!check.length > 0 ) {
      //console.log('working with');
      //console.log(this.collection);
      this.collection.pop();
      //console.log('removed');
      //console.log(this.collection);
      this.collection.add(current, { at: this.counter - 1});
      this.counter++;

      //Bereits drei tiere ausgewählt?
      if (this.counter > 3) {
        Game.Rendered.Router.navigate('res', {trigger: true});
        $(document.body).append('<div id="buzzer"><img src="./Bilder/buzzer_start.png" /></div>');
        $(document.body).append('<div id="deinewahl"><img src="./Bilder/text_deine_wahl.png" /></div>');
        $(document.body).append('<div id="erfahremehr"><img src="./Bilder/text_gute_wahl_2.png" /></div>');
      }

      this.render();

    }
  },

  render: function(){

    $(this.el).html(this.template({
        selected: this.collection.toJSON()
    }));
    return this;

  },

});
