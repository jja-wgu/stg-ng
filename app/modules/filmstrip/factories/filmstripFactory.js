(function () {
	angular.module('filmstrip').factory('filmstripFactory', filmstripFactory);
	
	function filmstripFactory() {
		var baseUrl = 'www.placecage.com';
		
		return {
			getFilmstripImages: function () {
				return [
					{ url: 'http://' + baseUrl + '/100/100', caption: 'Something fun 1' },
					{ url: 'http://' + baseUrl + '/100/101', caption: 'Something fun 2' },
					{ url: 'http://' + baseUrl + '/100/102', caption: 'Something fun 3' }
				];
			}
		};
	}
})();