Game.Router =  Backbone.Router.extend({
    routes: {
        ''      : 'preload',
        'start' : 'start',
        'play'  : 'play',
        'res'   : 'res'
    },

    preload     : function (){
        //Add Spinner
        $(document.body).append('<div id="spinner" />');
        //Manuelle Bilder angeben die ausserhalb der animalscollection sind
        var preload = [
                            './Bilder/avatar_auswertung_kein_heinmtier.png',
                            './Bilder/avatar_auswertung_passt.png',
                            './Bilder/avatar_start.png',
                            './Bilder/avatar_start_buzzer.png',
                            './Bilder/buzzer_start.png',
                            './Bilder/fragezeichen_hg.png',
                            './Bilder/fragezeichen_hg_schatten.png',
                            './Bilder/text_achtung_fertig_los1_2.png',
                            './Bilder/text_achtung_fertig_los2_2.png',
                            './Bilder/text_achtung_fertig_los3_2.png',
                            './Bilder/text_deine_wahl.png',
                            './Bilder/text_gute_wahl_2.png',
                            './Bilder/text_waehle_mit.png',
                            './Bilder/text_welches_tier.png'
        ];
        //sammle die Bilder der Tiere
        Game.Data.animalsCollection.each(function(animal, i) {
            preload.push(animal.get('uribig'));
            preload.push(animal.get('urihg'));
            preload.push(animal.get('urismall'));
        });
        //und lade vor
        var promises = [];
        for (i = 0; i < preload.length; i++) {
            (function(url, promise) {
                var img = new Image();
                img = new Image();
                img.onload = function() {
                  promise.resolve();
                };
                img.src = url;
            })(preload[i], promises[i] = $.Deferred());
        }
        $.when.apply($, promises).done(function() {
            //Remove Spinner
            $('#spinner').remove();
            //And route to start
            Game.Rendered.Router.navigate('start', {trigger: true});
        });
        
    },

    start       : function(){
        //Kill Res View
        if (Game.Rendered.resView){
            Game.Rendered.resView.destroy_view();
        }

        //Start View wird erstellt
        Game.Rendered.startView = new Game.Views.Start({
            collection: Game.Data.startCollection 
        });

        //Render StartView
        Game.Rendered.startView.render().el;

    },

    play       : function(){

        //Kill Start View
        if (Game.Rendered.startView){
            Game.Rendered.startView.destroy_view();
        }

        //Slide View  der Tiere wird erstellt
        Game.Rendered.slidesView = new Game.Views.Slides({
            collection: Game.Data.animalsCollection 
        });

        //Selected View wird erstellt
        Game.Rendered.selectedView = new Game.Views.Selected({
            collection: Game.Data.selectedAnimalsCollection 
        });

        //Append Slides
        $(document.body).append(Game.Rendered.slidesView.render().el);

    },

    res       : function(){
        //Kill Slides View
        if (Game.Rendered.slidesView){
            Game.Rendered.slidesView.destroy_view();
            //unbind keypress from selectedAnimals
            $(document).unbind('keypress');
        }

        Game.Rendered.resView = new Game.Views.Res({
            collection: Game.Data.selectedAnimalsCollection
        });
        
    }
});