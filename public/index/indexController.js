angular.module('contatos', []);
angular.module('contatos').controller('indexController', function($scope, $http){
	
	var getContatos = function(){
		$http.get("http://localhost:3000/contatos").success(function(data, status){
			$scope.contatos = data;
		});
	};

	getContatos();

	$scope.masterClick = function(state){
		$scope.contatos.forEach(function(contato){
			contato.checked = state;
		});
	}

	$scope.openForm = function(visibleForm){
		$scope.visibleForm = !visibleForm;
		$scope.errorList.pop();
	};

	$scope.addContato = function(contato){
		$http.post("http://localhost:3000/contatos", contato).success(function(data){
			delete $scope.contato;
		});
	};

	$scope.errorList = ['Teste mensagem de erro criada por diretiva 1', 'Teste 2 mensagem de erro criada por diretiva'];
});



