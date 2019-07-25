module.controller("sumCtrl", SumCtrl);

function SumCtrl($scope, dataService) {
    $scope.data = dataService;
    $scope.getClass = function() {
        if($scope.data.a + $scope.data.b > 0) {
            if ($scope.color === 'Green-Yellow') {
                return 'green';
            } else if ($scope.color === 'Blue-Brown') {
                return 'blue';
            }
        } else if (($scope.data.a + $scope.data.b) < 0){
            if ($scope.color === 'Green-Yellow') {
                return 'yellow';
            } else if ($scope.color === 'Blue-Brown') {
                return 'brown';    
            }
        } else {
            return '';
        }

    }
}