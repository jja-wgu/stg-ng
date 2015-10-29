(function () {
	angular.module('filmstrip').directive('filmstripSelection', ['filmstripController', filmstripSelection]);
	
	function filmstripSelection() {
		var directive = {
			restrict: 'E',
			scope: {},
			template: '<figure class="filmstrip__selected-image"><img data-ng-src=""></figure>',
			link: linkFunction,
			controllerAs: 'filmstripController',
			controller: ['filmstripFactory', filmstripController]
		};
		
		return directive;
	}
	
	function linkFunction() {}
})();