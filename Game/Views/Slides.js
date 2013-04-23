Game.Views.Slides = Backbone.View.extend({
  tagName  : 'ul',
  id       : 'slides',
  
  delay: 2600,
  currentIndex: 0,

  initialize: function() {
    _.bindAll(this, 'render', 'rotateSlides', 'play', 'transition', 'select');
    $(document).bind('keypress', this.select);
  },

  select: function (event){

    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13') {
      var current = this.collection.at(0)
                        .collection.at(this.currentIndex);
      current.set('selected',true);
      Game.Mediator.publish('selected', current);

    } else {
      return false;
    }

  },

  render: function(){
    //filter trough all animals
    this.collection.each(function(slide, i) {
      //instant new single wiew
      var slideView = new Game.Views.Slide({ model:slide });
      //append to root element
      this.$el.append(slideView.render().el);
      //first, maybe buggy
      if (i == 0) {
        slideView.$el.toggleClass('current');
      }
      //count up
      i++;

    }, this);
    //append clear selected
    $(document.body).append(Game.Rendered.selectedView.render().el);
    //init play after first render
    this.play();
    
    return this;

  },

  destroy_view: function() {

    $('#slides').remove();
    $(document).unbind('keypress');
    this.remove();
    this.unbind();
    clearInterval(this.intervalPlay);

  },

  play: function() {

    this.intervalPlay = setInterval(this.rotateSlides, this.delay);

  },

  rotateSlides: function() {

    var current = this.currentIndex;

    if (this.currentIndex === (this.collection.length - 1)) {
      var next = 0;
    } else {
      var next = this.currentIndex + 1;
    }
    this.transition(current, next);

  },

  transition: function(from, to) {

      var current = this.collection.at(0)
                        .collection.at(from);
      var next = this.collection.at(0)
                        .collection.at(to);
  
      current.getEl().fadeOut('slow', function() {
        current.getEl().toggleClass('current');
      });
      next.getEl().fadeIn('slow', function(){
         next.getEl().toggleClass('current');
      });

      this.currentIndex = to;

  }
});
