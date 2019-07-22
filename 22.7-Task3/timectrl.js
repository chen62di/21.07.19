module.controller("timeCtrl", TimeCtrl);

function TimeCtrl($scope) {
    $scope.time = new Date();
    $scope.currentTime = function() {
        $scope.time = new Date();
    }

}