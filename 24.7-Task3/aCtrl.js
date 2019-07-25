module.controller("aCtrl", ACtrl);

function ACtrl($scope, errorsService, aService, dataService) {
    
    $scope.data = dataService;
    $scope.errors = errorsService;
    $scope.$watch("data.a", function(newa, olda) {
        $scope.getAList();
    })
    $scope.getAList = function() {

        $scope.alist = aService.getList();
    }
}
