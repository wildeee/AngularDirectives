angular.module('contatos').directive('uiError', function(){
	return {
		templateUrl: '/ErrorList',
		restrict: "E",
		scope: {
			errorList: "="
		},
		link: function(scope, element, attrs, ctrl){
			scope.closeErrorWindow = function(){
				scope.errorList = [];
			};
		}
	};
});