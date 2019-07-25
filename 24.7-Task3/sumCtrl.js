module.controller("sumCtrl", SumCtrl);

function SumCtrl($scope, dataService) {
    $scope.data = dataService;
    $scope.getClass = function() {
        if($scope.data.result >= 0 && $scope.data.color === 'Green-Yellow') {
            return 'green';
        } else if ($scope.data.result < 0 && $scope.data.color === 'Green-Yellow') {
            return 'yellow';
        } else if ($scope.data.result >= 0 && $scope.data.color === 'Blue-Brown') {
            return 'blue';
        } else {
            return 'brown';
        }
    }
}