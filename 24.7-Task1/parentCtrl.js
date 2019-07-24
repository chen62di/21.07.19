module.controller("parentCtrl", ParentCtrl)

// DI dependency injection - IOC
function ParentCtrl($scope, $rootScope) {

    $scope.name = ''
    $scope.email = ''
    $scope.age = ''
    $scope.getClass = function() { 
        if ($scope.name === '' && $scope.email === '' && $scope.age === '') {
            return 'empty';
        } else if ($scope.name === '' || $scope.email === '' || $scope.age === ''){
            return 'halfEmpty';
        } else if ($scope.name !== '' && $scope.email !== '' && $scope.age < 18) {
            return 'underAge';
        } else {
            return 'ok';
        }
    }
}