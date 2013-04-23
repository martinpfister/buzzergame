Game.Models.Animal = Backbone.Model.extend({
  defaults: {
    uid          : 0,
    selected     : false,
    uri          : '',
    state        : '',
    title        : '',
    text         : '',
    category     : 'leer',
  },
  
  validate : function(attrs){

    if ( attrs.category != 'wildtier' || attrs.category != 'heimtier') {
      return 'als category sind nur "wildtier" oder "heimtier" erlaubt';
    }

  },

  toggleClass: function() {
    this.getEl().toggleClass('current');
  },

  getEl: function() {
    return $('#slide-' + this.get('uid'));
  },

  select: function() {
    console.log('selectme' + this.get('title'));
  }

});