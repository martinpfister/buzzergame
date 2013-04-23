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
      }

      this.render();

    }
  },

  render: function(){
    //console.log('rerender');
    //console.log(this.collection.toJSON());
    $(this.el).html(this.template({
        selected: this.collection.toJSON()
    }));
    /**
     * Hier kommen die IE Hacks :(
     */
    $('#selected li:nth-child(3n+1)').addClass('nth-child-1');
    $('#selected li:nth-child(3n+2)').addClass('nth-child-2');
    $('#selected li:nth-child(3n+3)').addClass('nth-child-3');
    return this;
  },
});