module.controller("bCtrl", BCtrl);

function BCtrl($scope, errorsService, bService, dataService) {
    $scope.data = dataService;
    $scope.errors = errorsService;
    $scope.$watch("data.b", function(newb, oldb) {
        $scope.getBList();
    })
    $scope.getBList = function() {

        $scope.blist = bService.getList();
    }

}
