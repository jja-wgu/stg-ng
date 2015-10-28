(function () {
	angular.module('filmstrip').controller('filmstripController', ['filmstripFactory', filmstripController]);
	
	function filmstripController(imageFactory) {
		this.images = imageFactory.getFilmstripImages();
		this.updateSelected = function(url) {
			console.log('url:', url)
		}
	}
})();