(function() {
	var app = angular.module('gmatApp', []);
	
	app.controller('QuestionController', function(){
		this.question = questions[0];
		
	});
	
	var questions = [{
			id:1,
			type: "Critical Reasoning",
			description: "Comet A is seen near the Earth every 12 years while comet B every 20 years. If both comets were observed in 1979, for how many years do we have to wait to see the two comets together again? (Assume now is 2004)",
			answers: [
				
			]
	}];
	

})();