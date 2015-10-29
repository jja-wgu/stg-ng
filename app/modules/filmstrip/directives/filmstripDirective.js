(function () {
	angular.module('filmstrip').directive('filmstrip', ['filmstripController', filmstrip]);
	
	function filmstrip(filmstripController) {
		var selectedAboveTemplate = '<div ng-transclude></div>',
			selectedSideTemplate = '',
			selectedBelowTemplate = '';
		var directive = {
			restrict: 'E',
			scope: {
				selectionLocation: '@',
				selectedImage: '='
			},
			// templateUrl: 'app/modules/filmstrip/partials/filmstripTemplate.html',
			template: selectedAboveTemplate + selectedSideTemplate + '<div><figure class="filmstrip__figure" ng-click="filmstripController.updateSelected(image)" ng-repeat="image in filmstripController.images"><img ng-src="{{image.url}}"><figcaption>{{image.caption}}</figcaption></figure></div>' + selectedBelowTemplate,
			transclude: true,
			controllerAs: 'filmstripController',
			controller: ['scope', 'filmstripFactory', filmstripController],
			bindToController: true,
			link: linkFunction,
		};
		
		return directive;
	}
	
	// How do I move the controller to its own file? When I tried I kept getting controller provider errors
	// function filmstripController(imageFactory) {
	// 	this.images = imageFactory.getFilmstripImages();
	// 	this.currentImage = this.images[0];
	// 	this.updateSelected = function(image) {
			
	// 		console.log('image:', image)
	// 	}
	// }
	function linkFunction() {}
})();