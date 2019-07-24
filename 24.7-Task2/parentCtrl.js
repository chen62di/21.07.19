module.controller("parentCtrl", ParentCtrl)

// DI dependency injection - IOC
function ParentCtrl($scope, $rootScope) {  
    $scope.message = "Hello I am the parent(first) controller";
}