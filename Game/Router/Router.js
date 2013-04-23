Game.Router =  Backbone.Router.extend({
    routes: {
        ''      : 'start',
        'play'  : 'play',
        'res'   : 'res'
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