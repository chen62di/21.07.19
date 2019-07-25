module.controller("parentCtrl", ParentCtrl)

function ParentCtrl($scope, dataService, httpService) {

    $scope.data = dataService;
    httpService.getAllData();
    $scope.getById = function() {
        httpService.getDataById($scope.id);
    }
}