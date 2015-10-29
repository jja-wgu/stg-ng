(function () {
	angular.module('filmstrip').controller('filmstripController', ['scope', 'filmstripFactory', filmstripController]);
	
	function filmstripController(scope, imageFactory) {
		console.log('You are in');
		this.images = imageFactory.getFilmstripImages();
		this.updateSelected = function(url) {
			console.log('url:', url)
		}
	}
})();