

angular.module("BlankApp", ['ngMaterial']).controller("CalculatorControllerBase",
    function CalculatorControllerBase($scope, $mdDialog, $mdMedia) {
    	$scope.stringEquation = "0";
    	this.listOfFunctions = ["+","-","/","*","C","1","2","3"];
    	$scope.temp = "Hello";
    	$scope.started = false;
    	$scope.status;
    	$scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');

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

	    $scope.showAdvanced = function(ev) {
		    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
		    $mdDialog.show({
		      controller: DialogController,
		      templateUrl: 'panel.tmpl.html',
		      parent: angular.element(document.body),
		      targetEvent: ev,
		      clickOutsideToClose:true,
		      fullscreen: useFullScreen
		    })
		    .then(function(answer) {
		      $scope.status = 'You said the information was "' + answer + '".';
		    }, function() {
		      $scope.status = 'You cancelled the dialog.';
		    });
		    $scope.$watch(function() {
		      return $mdMedia('xs') || $mdMedia('sm');
		    }, function(wantsFullScreen) {
		      $scope.customFullscreen = (wantsFullScreen === true);
		    });
	  	};
	}

);
function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}



