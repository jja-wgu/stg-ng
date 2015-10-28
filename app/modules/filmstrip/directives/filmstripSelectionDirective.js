(function () {
	angular.module('filmstrip').directive('filmstripSelection', filmstripSelection);
	
	function filmstripSelection() {
		var directive = {
			restrict: 'E',
			scope: {},
			template: '<div>Filmstrip Selection</div>',
			link: linkFunction
		};
		
		return directive;
	}
	
	function linkFunction() {}
})();