angular.module('contatos').directive('uiTelefone', function(){
	return {
		require: 'ngModel',
		link: function(scope, element, attrs, ctrl){
			var _numbersOnly = function(str){
				return str.replace(/[^0-9]+/g, '');
			};
			var _format = function(fone){
				fone = _numbersOnly(fone); //Deixa somente números
				if (fone.length > 0){
					fone = '+' + fone;
				}

				if (fone.length > 3) {
					fone = fone.substring(0, 3) + ' (' + fone.substring(3);
				}

				if (fone.length > 7) {
					fone = fone.substring(0, 7) + ') ' + fone.substring(7);
				}

				if (fone.length > 13 && fone.length < 18) {
					fone = fone.substring(0, 13) + '-' + fone.substring(13);
				} else if (fone.length >= 18) {
					fone = fone.substring(0, 14) + '-' + fone.substring(14, 18);
				}

				return fone;
			};

			element.on('keyup', function(){
				ctrl.$setViewValue(_format(ctrl.$viewValue));
				ctrl.$render();
			});

			element.on('blur', function(){
				var _fone = _numbersOnly(ctrl.$viewValue);
				if (_fone.length < 12 || _fone.length > 13) {
					ctrl.$setViewValue('');
					ctrl.$render();
				}
			});
		}
	};
});