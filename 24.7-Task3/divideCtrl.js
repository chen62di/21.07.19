module.controller("divideCtrl", DivideCtrl);

function DivideCtrl($scope, dataService, errorsService) {
    $scope.data = dataService;
    $scope.errors = errorsService;
}