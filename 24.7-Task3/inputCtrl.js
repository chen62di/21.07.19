module.controller("inputCtrl", InputCtrl);

function InputCtrl($scope, dataService) {
    $scope.input = dataService;
}