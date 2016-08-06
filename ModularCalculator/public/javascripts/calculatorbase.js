(function (){
    var mod = angular.module("BlankApp", ['ngMaterial'])
    .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('indigo')
      .primaryPalette('indigo')
      .accentPalette('pink');

    $mdThemingProvider.theme('lime')
      .primaryPalette('lime')
      .accentPalette('orange')
      .warnPalette('blue');

    $mdThemingProvider.theme('red')
        .primaryPalette('red')
        .accentPalette('pink') 
        .warnPalette('blue') 

    $mdThemingProvider.alwaysWatchTheme(true);
})


mod.controller("CalculatorControllerBase",
    function CalculatorControllerBase($scope, $mdDialog, $mdMedia, $timeout, $mdSidenav, $log) {
    	$scope.stringEquation = "0";
    	this.listOfFunctions = ["C"];
    	$scope.temp = "Hello";
    	$scope.started = false;
    	$scope.status;
        $scope.toggleRight = buildToggler('right');
        $scope.theme = 'indigo';
        $scope.themeIndex = 0;
        this.listOfModules = []
        $scope.themeList = ['indigo', 'lime', 'red']

        $scope.addModule = function(funcs, nam){
            for (i = 0; i < funcs.length; i++){
                listOfFunctions.push(funcs[i]);
            }
            var temp = {name:nam, functions:funcs}
            listOfModules.push(temp);
            addModuleToContainer(temp.name);
        }
        /**
        *  Assumes that func is a valid object in listOfModules[]
        *
        */
        $scope.removeModule = function(func){
            var index2 = listOfModules.indexOf(func);
            while(func.functions.length > 0){
                var index = listOfFunctions.indexOf(func.functions[0]);
                listOfFunctions.splice(index, 1);
                func.functions.splice(0, 1);
            }
            removeModuleFromContainer(func.name)
            listOfModules.splice(index2, 1);
        }

        $scope.addModuleToContainer = function(funcName){
            var element = document.getElementById("ModuleContainer");

            var button = document.createElement("md-button id=funcName");
            var node = document.createTextNode(funcName);
            button.appendChild(node);

            element.appendChild(button);
        }

        $scope.removeModuleFromContainer = function(funcName){
            var parent = document.getElementById("ModuleContainer");
            var child = document.getElementById(funcName);
            parent.removeChild(child);
        }

        $scope.changeTheme = function() {
            $scope.themeIndex++;
            if ($scope.themeIndex>=$scope.themeList.length){
                $scope.themeIndex = 0;
            }
            $scope.theme = $scope.themeList[$scope.themeIndex];
        };
        
        $scope.isOpenRight = function(){
          return $mdSidenav('right').isOpen();
        };

         /**
         * Supplies a function that will continue to operate until the
         * time is up.
         */
        function debounce(func, wait, context) {
          var timer;
          return function debounced() {
            var context = $scope,
                args = Array.prototype.slice.call(arguments);
            $timeout.cancel(timer);
            timer = $timeout(function() {
              timer = undefined;
              func.apply(context, args);
            }, wait || 10);
          };
        };

        /**
         * Build handler to open/close a SideNav; when animation finishes
         * report completion in console
         */
        function buildDelayedToggler(navID) {
          return debounce(function() {
            // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav(navID)
              .toggle()
              .then(function () {
                $log.debug("toggle " + navID + " is done");
              });
          }, 200);
        };

        function buildToggler(navID) {
          return function() {
            // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav(navID)
              .toggle()
              .then(function () {
                $log.debug("toggle " + navID + " is done");
              });
          }
        };
 

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
    		
    	};

	    

        $scope.updatePanelPath = function(path){
            panelPath=path;
        }


});

mod.controller("DialogController", 
    function DialogController($scope, $mdDialog, $mdMedia) {
    $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');

      $scope.hide = function() {
        $mdDialog.hide();
      };
      $scope.cancel = function() {
        $mdDialog.cancel();
      };
      $scope.newPanel = function(path, ev) {
        $mdDialog.hide();
        $scope.showAdvanced(ev, path);
      };

  $scope.showAdvanced = function(ev, path) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
        $mdDialog.show({
            controller: DialogController,
            templateUrl: path,
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: useFullScreen
        })
        $scope.$watch(function() {
            return $mdMedia('xs') || $mdMedia('sm');
        }, function(wantsFullScreen) {
            $scope.customFullscreen = (wantsFullScreen === true);
        });
    };
});

mod.controller('NavControl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('right').close()
        .then(function () {
          $log.debug("close RIGHT is done");
        });
    };
  });
})();

