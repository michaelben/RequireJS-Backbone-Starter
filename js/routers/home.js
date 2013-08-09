define([
	'jquery', 
	'backbone', 
	'underscore', 
	'views/view',
    'views/detailView'], 
function($, Backbone, _, mainView, detailView){
	var Router = Backbone.Router.extend({
		initialize: function(){
			this.mainView = mainView;
			Backbone.history.start();
		},
		routes: {
			'home': 'home',
            'detail': 'detail'
		},
		'home': function(){
			this.mainView.render();
		},
        'detail': function(){
            this.detailView.render();
        }
	});
	
	return Router;
});
