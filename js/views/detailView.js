define([
		'jquery', 
		'backbone',
		'underscore', 
		'models/detailModel',
		'text!templates/detail.html'], 
function($, Backbone, _, model, template){
	var View = Backbone.View.extend({
		el: '#detail',
		initialize: function(){
			this.model = new model({
				message: 'Detail Model'
			});
			this.template = _.template( template, { model: this.model.toJSON() } );
		},
		render: function(){
			$(this.el).append( this.template );
		}
	});
	
	return new View();
});
