

angular.module("BlankApp", ['ngMaterial']).controller("CalculatorControllerBase",
    function CalculatorControllerBase($scope) {
    	$scope.stringEquation = "0";
    	this.listOfFunctions = ["+","-","/","*","C","1","2","3"];
    	$scope.temp = "Hello";
    	$scope.started = false;

    	$scope.onClick = function(symbol){
    		if(symbol === "C"){
    			$scope.stringEquation = "0";
    			$scope.started = false;
    		}

    		else if(!$scope.started && $scope.stringEquation === "0"){
    			$scope.stringEquation = symbol;
    			$scope.started = true;
    		}
    		else{
    			$scope.stringEquation += symbol;
    		}
    		
    	}
    }
);

