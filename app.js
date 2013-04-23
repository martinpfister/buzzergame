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
        uid       : 1,
        title     : 'Affe',
        text      : 'Der Affe ist toll',
        category  : 'wildtier',
        uribig    : './Bilder/Tiere/affe_big.jpg',
        urihg     : './Bilder/Tiere/affe_hg.jpg',
        urismall  : './Bilder/Tiere/affe_small.jpg'
      },
      {
        uid       : 2,
        title     : 'Chinchilla',
        text      : 'Der Chinchilla ist toll',
        category  : 'heimtier',
        uribig    : './Bilder/Tiere/chinchilla_big.jpg',
        urihg     : './Bilder/Tiere/chinchilla_hg.jpg',
        urismall  : './Bilder/Tiere/chinchilla_small.jpg'
      },
      {
        uid       : 3,
        title     : 'Eichhörnchen',
        text      : 'Das Eichhörnchen ist toll',
        category  : 'wildtier',
        uribig    : './Bilder/Tiere/eichhoernchen_big.jpg',
        urihg     : './Bilder/Tiere/eichhoernchen_hg.jpg',
        urismall  : './Bilder/Tiere/eichhoernchen_small.jpg'
      },
      {
        uid       : 4,
        title     : 'Elefant',
        text      : 'Der Elefant ist toll',
        category  : 'wildtier',
        uribig    : './Bilder/Tiere/elefant_big.jpg',
        urihg     : './Bilder/Tiere/elefant_hg.jpg',
        urismall  : './Bilder/Tiere/elefant_small.jpg'
      },
      {
        uid       : 5,
        title     : 'Erdmenchen',
        text      : 'Der Erdmenchen ist toll',
        category  : 'wildtier',
        uribig    : './Bilder/Tiere/erdmaennchen_big.jpg',
        urihg     : './Bilder/Tiere/erdmaennchen_hg.jpg',
        urismall  : './Bilder/Tiere/erdmaennchen_small.jpg'
      },
      {
        uid       : 6,
        title     : 'Feldhase',
        text      : 'Der Elefant ist toll',
        category  : 'wildtier',
        uribig    : './Bilder/Tiere/feldhase_big.jpg',
        urihg     : './Bilder/Tiere/feldhase_hg.jpg',
        urismall  : './Bilder/Tiere/feldhase_small.jpg'
      },
      {
        uid       : 6,
        title     : 'Fisch',
        text      : 'Der Fisch ist toll',
        category  : 'heimtier',
        uribig    : './Bilder/Tiere/fisch_big.jpg',
        urihg     : './Bilder/Tiere/fisch_hg.jpg',
        urismall  : './Bilder/Tiere/fisch_small.jpg'
      },
      {
        uid       : 8,
        title     : 'Fretchen',
        text      : 'Der Fretchen ist toll',
        category  : 'wildtier',
        uribig    : './Bilder/Tiere/frettchen_big.jpg',
        urihg     : './Bilder/Tiere/frettchen_hg.jpg',
        urismall  : './Bilder/Tiere/frettchen_small.jpg'
      },
      {
        uid       : 9,
        title     : 'Hamster',
        text      : 'Der Hamster ist toll',
        category  : 'heimtier',
        uribig    : './Bilder/Tiere/hamster1_big.jpg',
        urihg     : './Bilder/Tiere/hamster1_hg.jpg',
        urismall  : './Bilder/Tiere/hamster1_small.jpg'
      },
      {
        uid       : 10,
        title     : 'Hamster2',
        text      : 'Der Hamster2 ist toll',
        category  : 'heimtier',
        uribig    : './Bilder/Tiere/hamster2_big.jpg',
        urihg     : './Bilder/Tiere/hamster2_hg.jpg',
        urismall  : './Bilder/Tiere/hamster2_small.jpg'
      },
      {
        uid       : 11,
        title     : 'Hund',
        text      : 'Der Hund ist toll',
        category  : 'heimtier',
        uribig    : './Bilder/Tiere/hund1_big.jpg',
        urihg     : './Bilder/Tiere/hund1_hg.jpg',
        urismall  : './Bilder/Tiere/hund1_small.jpg'
      },
      {
        uid       : 12,
        title     : 'Hund',
        text      : 'Der Hund ist toll',
        category  : 'heimtier',
        uribig    : './Bilder/Tiere/hund2_big.jpg',
        urihg     : './Bilder/Tiere/hund2_hg.jpg',
        urismall  : './Bilder/Tiere/hund2_small.jpg'
      },
      {
        uid       : 13,
        title     : 'Hund',
        text      : 'Der Hund ist toll',
        category  : 'heimtier',
        uribig    : './Bilder/Tiere/hund3_big.jpg',
        urihg     : './Bilder/Tiere/hund3_hg.jpg',
        urismall  : './Bilder/Tiere/hund3_small.jpg'
      },
      {
        uid       : 14,
        title     : 'Kaninchen',
        text      : 'Das Kaninchen ist toll',
        category  : 'heimtier',
        uribig    : './Bilder/Tiere/kaninchen1_big.jpg',
        urihg     : './Bilder/Tiere/kaninchen1_hg.jpg',
        urismall  : './Bilder/Tiere/kaninchen1_small.jpg'
      },
      {
        uid       : 15,
        title     : 'Kaninchen',
        text      : 'Der Kaninchen ist toll',
        category  : 'heimtier',
        uribig    : './Bilder/Tiere/kaninchen2_big.jpg',
        urihg     : './Bilder/Tiere/kaninchen2_hg.jpg',
        urismall  : './Bilder/Tiere/kaninchen2_small.jpg'
      },
      {
        uid       : 16,
        title     : 'Kaninchen',
        text      : 'Der Kaninchen ist toll',
        category  : 'heimtier',
        uribig    : './Bilder/Tiere/kaninchen3_big.jpg',
        urihg     : './Bilder/Tiere/kaninchen3_hg.jpg',
        urismall  : './Bilder/Tiere/kaninchen3_small.jpg'
      },
      {
        uid       : 17,
        title     : 'Katze',
        text      : 'Die Katze ist toll',
        category  : 'heimtier',
        uribig    : './Bilder/Tiere/katze1_big.jpg',
        urihg     : './Bilder/Tiere/katze1_hg.jpg',
        urismall  : './Bilder/Tiere/katze1_small.jpg'
      },
      {
        uid       : 18,
        title     : 'Katze',
        text      : 'Der Katze ist toll',
        category  : 'heimtier',
        uribig    : './Bilder/Tiere/katze2_big.jpg',
        urihg     : './Bilder/Tiere/katze2_hg.jpg',
        urismall  : './Bilder/Tiere/katze2_small.jpg'
      },
      {
        uid       : 19,
        title     : 'Katze',
        text      : 'Der Katze ist toll',
        category  : 'heimtier',
        uribig    : './Bilder/Tiere/katze3_big.jpg',
        urihg     : './Bilder/Tiere/katze3_hg.jpg',
        urismall  : './Bilder/Tiere/katze3_small.jpg'
      },
      {
        uid       : 20,
        title     : 'Leguan',
        text      : 'Der Leguan ist toll',
        category  : 'wildtier',
        uribig    : './Bilder/Tiere/leguan_big.jpg',
        urihg     : './Bilder/Tiere/leguan_hg.jpg',
        urismall  : './Bilder/Tiere/leguan_small.jpg'
      },
      {
        uid       : 21,
        title     : 'Luchs',
        text      : 'Der Luchs ist toll',
        category  : 'wildtier',
        uribig    : './Bilder/Tiere/luchs_big.jpg',
        urihg     : './Bilder/Tiere/luchs_hg.jpg',
        urismall  : './Bilder/Tiere/luchs_small.jpg'
      },
      {
        uid       : 22,
        title     : 'Maus',
        text      : 'Der Maus ist toll',
        category  : 'heimtier',
        uribig    : './Bilder/Tiere/maus1_big.jpg',
        urihg     : './Bilder/Tiere/maus1_hg.jpg',
        urismall  : './Bilder/Tiere/maus1_small.jpg'
      },
      {
        uid       : 23,
        title     : 'Maus',
        text      : 'Der Maus ist toll',
        category  : 'heimtier',
        uribig    : './Bilder/Tiere/maus2_big.jpg',
        urihg     : './Bilder/Tiere/maus2_hg.jpg',
        urismall  : './Bilder/Tiere/maus2_small.jpg'
      },
      {
        uid       : 24,
        title     : 'Meerschweinchen',
        text      : 'Der Meerschweinchen ist toll',
        category  : 'heimtier',
        uribig    : './Bilder/Tiere/meerschweinchen1_big.jpg',
        urihg     : './Bilder/Tiere/meerschweinchen1_hg.jpg',
        urismall  : './Bilder/Tiere/meerschweinchen1_small.jpg'
      },
      {
        uid       : 25,
        title     : 'Meerschweinchen',
        text      : 'Der Meerschweinchen ist toll',
        category  : 'heimtier',
        uribig    : './Bilder/Tiere/meerschweinchen2_big.jpg',
        urihg     : './Bilder/Tiere/meerschweinchen2_hg.jpg',
        urismall  : './Bilder/Tiere/meerschweinchen2_small.jpg'
      },
      {
        uid       : 26,
        title     : 'Nashorn',
        text      : 'Der nashorn ist toll',
        category  : 'wildtier',
        uribig    : './Bilder/Tiere/nashorn_big.jpg',
        urihg     : './Bilder/Tiere/nashorn_hg.jpg',
        urismall  : './Bilder/Tiere/nashorn_small.jpg'
      },
      {
        uid       : 27,
        title     : 'Pelikan',
        text      : 'Der Pelikan ist toll',
        category  : 'wildtier',
        uribig    : './Bilder/Tiere/pelikan_big.jpg',
        urihg     : './Bilder/Tiere/pelikan_hg.jpg',
        urismall  : './Bilder/Tiere/pelikan_small.jpg'
      },
      {
        uid       : 28,
        title     : 'Ratte',
        text      : 'Der Ratte ist toll',
        category  : 'heimtier',
        uribig    : './Bilder/Tiere/ratte_big.jpg',
        urihg     : './Bilder/Tiere/ratte_hg.jpg',
        urismall  : './Bilder/Tiere/ratte_small.jpg'
      },
      {
        uid       : 29,
        title     : 'Reh',
        text      : 'Der Reh ist toll',
        category  : 'wildtier',
        uribig    : './Bilder/Tiere/reh_big.jpg',
        urihg     : './Bilder/Tiere/reh_hg.jpg',
        urismall  : './Bilder/Tiere/reh_small.jpg'
      },
      {
        uid       : 30,
        title     : 'Schildkröte',
        text      : 'Der Schildkröte ist toll',
        category  : 'wildtier',
        uribig    : './Bilder/Tiere/schildkroete_big.jpg',
        urihg     : './Bilder/Tiere/schildkroete_hg.jpg',
        urismall  : './Bilder/Tiere/schildkroete_small.jpg'
      },
      {
        uid       : 31,
        title     : 'Spinne',
        text      : 'Der Spinne ist toll',
        category  : 'heimtier',
        uribig    : './Bilder/Tiere/spinne_big.jpg',
        urihg     : './Bilder/Tiere/spinne_hg.jpg',
        urismall  : './Bilder/Tiere/spinne_small.jpg'
      },
      {
        uid       : 32,
        title     : 'Wal',
        text      : 'Der Wal ist toll',
        category  : 'wildtier',
        uribig    : './Bilder/Tiere/wal_big.jpg',
        urihg     : './Bilder/Tiere/wal_hg.jpg',
        urismall  : './Bilder/Tiere/wal_small.jpg'
      },
      {
        uid       : 33,
        title     : 'Wellensittich',
        text      : 'Der wellensittich ist toll',
        category  : 'heimtier',
        uribig    : './Bilder/Tiere/wellensittich_big.jpg',
        urihg     : './Bilder/Tiere/wellensittich_hg.jpg',
        urismall  : './Bilder/Tiere/wellensittich_small.jpg'
      }
  ]);

  /**
 * Die Eigenschaften der Start-Slides
 * @type {Game}
 */
  Game.Data.startCollection = new Game.Collections.Start([
      {
        uid     : 'toggel',
        uri     : './Bilder/avatar_start.png',
        screen  : 0
      },
      {
        uid     : 'buzzer',
        uri     : './Bilder/buzzer_start.png',
        screen  : 1
      },
      {
        uid     : 'welchestier',
        uri     : './Bilder/text_welches_tier.png',
        screen  : 1
      },
      {
        uid     : 'waehledrei',
        uri     : './Bilder/text_waehle_mit.png',
        screen  : 2
      },
      {
        uid     : 'achtung',
        uri     : './Bilder/text_achtung_fertig_los1_2.png',
        screen  : 2
      },
      {
        uid     : 'fertig',
        uri     : './Bilder/text_achtung_fertig_los2_2.png',
        screen  : 2
      },
      {
        uid     : 'los',
        uri     : './Bilder/text_achtung_fertig_los3_2.png',
        screen  : 2
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
