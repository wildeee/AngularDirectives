angular.module('contatos', []);
angular.module('contatos').controller('indexController', function($scope, $http){
	
	var _getContatos = function(){
		$http.get("http://localhost:3000/contatos").success(function(data, status){
			$scope.contatos = data;
		});
	};

	_getContatos();

	$scope.masterClick = function(state){
		$scope.contatos.forEach(function(contato){
			contato.checked = state;
		});
	}

	$scope.openForm = function(visibleForm){
		$scope.visibleForm = !visibleForm;
		$scope.errorList.pop();
	};

	$scope.errorList = [];

	$scope.addContato = function(contato){		//SIM, ESSE CÓDIGO ESTÁ FEIO, MAS ESTÁ FUNCIONAL, DEPOIS ARRUMO.
		$scope.errorList = [];
		if (contato){
			if (contato.nome == undefined || contato.nome == ''){
				$scope.errorList.push('Nome é obrigatório.');
			}
			if (contato.telefone === undefined || contato.telefone === ''){
				$scope.errorList.push('Telefone é obrigatório.');
			}
			if ($scope.errorList.length > 0){
				return;
			}
			$scope.contatos.push(angular.copy(contato)); // Provisório, até que o back-end esteja gerando os ID's
			delete $scope.ct;
		} else {
			$scope.errorList.push('Nome é obrigatório.');
			$scope.errorList.push('Telefone é obrigatório.');
		}
		
		// $http.post("http://localhost:3000/contatos", contato).success(function(data){
		// 	delete contato;
		// });
	};
});



