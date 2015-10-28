(function () {
	angular.module('filmstrip').directive('filmstrip', filmstrip);
	
	function filmstrip() {
		var directive = {
			restrict: 'E',
			scope: {},
			// templateUrl: 'app/modules/filmstrip/partials/filmstripTemplate.html',
			template: '<div><figure class="filmstrip__figure" data-ng-click="filmstripController.updateSelected(image.url)" data-ng-repeat="image in filmstripController.images"><img data-ng-src="{{image.url}}"><figcaption>{{image.caption}}</figcaption></figure></div>',
			transclude: true,
			controllerAs: 'filmstripController',
			controller: ['filmstripFactory', filmstripController],
			link: linkFunction,
		};
		
		return directive;
	}
	
	// How do I move the controller to its own file? When I tried I kept getting controller provider errors
	function filmstripController(imageFactory) {
		this.images = imageFactory.getFilmstripImages();
		this.updateSelected = function(url) {
			console.log('url:', url)
		}
	}
	function linkFunction() {}
})();