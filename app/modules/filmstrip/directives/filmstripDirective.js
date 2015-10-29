(function () {
	angular.module('filmstrip')
		.directive('filmstrip', filmstrip)
		.directive('filmstripSelection', filmstripSelection);
	
	function filmstrip() {
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
			template: selectedAboveTemplate + selectedSideTemplate + '<div><figure class="filmstrip__figure" ng-click="filmstripController.selectedImage = image" ng-repeat="image in filmstripController.images"><img ng-src="{{image.url}}"><figcaption>{{image.caption}}</figcaption></figure></div>' + selectedBelowTemplate,
			transclude: true,
			controllerAs: 'filmstripController',
			controller: ['$scope', 'filmstripFactory', filmstripController],
			bindToController: true,
			link: linkFunction,
		};
		
		return directive;
	}
	
	function filmstripSelection() {
		var directive = {
			restrict: 'E',
			scope: {
				selectedImage: '='
			},
			controllerAs: 'filmstripController',
			controller: ['$scope', 'filmstripFactory', filmstripController],
			bindToController: true,
			template: '<figure class="filmstrip__selected-image"><img data-ng-src="{{filmstripController.selectedImage.url}}"></figure>',
			link: selectionLinkFunction,
			// require: '^filmstrip'
		};
		
		return directive;
	}
	
	function selectionLinkFunction($scope, element, attrs, controller) {
		console.log('controller:', controller);
		var image = controller.currentImage;
	}
	
	// How do I move the controller to its own file? When I tried I kept getting controller provider errors
	function filmstripController($scope, imageFactory) {
		var self = this;
		self.images = imageFactory.getFilmstripImages();
		self.currentImage = self.images[0];
		self.selectedImage = self.images[0];
		self.updateSelected = function(image) {
			self.currentImage = image;
			self.selectedImage = image;
			console.log('image:', image);
			console.log('self.selectedImage:', self.selectedImage)
		}
	}
	function linkFunction() {}
})();