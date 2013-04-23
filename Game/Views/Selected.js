Game.Views.Selected = Backbone.View.extend({
  tagName     : 'ul',
  id          : 'selected',
  template    : Game.Template('selected'),

  counterbla     : 1,

  initialize: function() {

    _.bindAll(this, 'render', 'add_selected');
     Game.Mediator.subscribe('selected', this.add_selected);
     console.log('initialize');
     console.log(this.counterbla);
  
  },

  destroy_view: function() {

    $('#selected').remove();
    this.remove();
    this.unbind();
    this.counterbla = 1;

  },

  add_selected : function(current) {
    console.log('add_selected');
    console.log(this.counterbla);
    console.log(current.get('title'));
    var check = this.collection.where({uid: current.get('uid')});
    //Tier noch nicht in der collection?
    if (!check.length > 0 ) {
      this.collection.pop();
      this.collection.add(current, { at: this.counterbla - 1});
      this.counterbla++;

      //Bereits drei tiere ausgewählt?
      console.log('vor der if counterbla abfrage');
      console.log(this.counterbla);
      if (this.counterbla == 4) {
        console.log('ist grösser');
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
