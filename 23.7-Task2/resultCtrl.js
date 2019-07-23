module.controller("resultCtrl", ResultCtrl);

function ResultCtrl($scope, $rootScope) {
    $scope.doCalc = function() {
        $rootScope.result = $scope.$parent.doCalculate();
    }
    
}