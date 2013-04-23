//Globale Variable Game wird gesetzt

(function(){

window.Game = {
  Models        : {},
  Collections   : {},
  Views         : {},
  Rendered      : {},
  Router        : {},
  Data          : {},
  Mediator      : Backbone.Mediator,
  Template      : function(id){
                    return _.template( $('#' + id).html() );
                  }
};

})();

//Die Daten werden definiert

$(document).ready(function() {
 /**
 * Die Eigenschaften aller Tiere
 * @type {Game}
 */
  Game.Data.animalsCollection = new Game.Collections.Slides([
      {
        uid    : 1,
        title : 'Fuchs',
        text  : 'Der Fuchs ist toll',
        category: 'wildtier',
        uri   : './Bilder/fuchs.png'
      },
      {
        uid    : 2,
        title : 'erdmaenchen',
        text  : 'Die Ermänchen sind toll',
        category: 'wildtier',
        uri   : './Bilder/erdmaenchen.png'
      },
      {
        uid    : 3,
        title : 'Meerschweinchen',
        text  : 'Das Meerschweinchen ist toll',
        category: 'heimtier',
        uri   : './Bilder/meerschweinchen.png'
      },
      {
        uid    : 4,
        title : 'Hund',
        text  : 'Der Hund ist toll',
        category: 'heimtier',
        uri   : './Bilder/hund.png'
      },
      {
        uid    : 5,
        title : 'Maus',
        text  : 'Das Maus ist toll',
        category: 'heimtier',
        uri   : './Bilder/maus.png'
      }
  ]);

  /**
 * Die Eigenschaften der Start-Slides
 * @type {Game}
 */
  Game.Data.startCollection = new Game.Collections.Start([
      {
        uid     : 'toggel',
        uri     : './Bilder/maus.png',
        screen  : 0
      },
      {
        uid     : 'buzzer',
        uri     : './Bilder/maus.png',
        screen  : 1
      },
      {
        uid     : 'welchestier',
        uri     : './Bilder/maus.png',
        screen  : 1
      },
      {
        uid     : 'waehledrei',
        uri     : './Bilder/hund.png',
        screen  : 2
      },
      {
        uid     : 'achtung',
        uri     : './Bilder/hund.png',
        screen  : 3
      },
      {
        uid     : 'fertig',
        uri     : './Bilder/hund.png',
        screen  : 3
      },
      {
        uid     : 'los',
        uri     : './Bilder/hund.png',
        screen  : 3
      }
  ]);
  /**
   * Die gebuzzerten Tiere, leer.
   * @type {Game}
   */
  Game.Data.selectedAnimalsCollection = new Game.Collections.Selected([
      {},
      {},
      {}
  ]);

  //starte Game
  Game.Rendered.Router = new Game.Router();
  Backbone.history.start()
  //Game.Rendered.Router.history();

});
