module.controller("parentCtrl", ParentCtrl)

//let value1 

// DI dependency injection - IOC
function ParentCtrl($scope, $rootScope) {

    
    $scope.devices = [
        new Mobile({model: "IPhone X", color: "black", price: 3500}),
        new Mobile({model: "Xiaomi", color: "green", price: 1000}),
        new Mobile({model: "Samsung Galaxy 11+", color: "black", price: 5500}),
        new Mobile({model: "LG V60", color: "White", price: 7500})
    ]
    
    $scope.$watch('devices.length', function() {
        $rootScope.numberOfDevices = $scope.devices.length;
    }) ;

    $scope.addPhone = function() {
        $scope.devices.push(new Mobile({model: $scope.model, color: $scope.color, price: $scope.price}));
    }

    $scope.deletePhone = function(mobileId) {
        $scope.devices.splice(mobileId, 1);
    }

    $scope.updatePhone = function() {
        if ($scope.id < $scope.devices.length) {
            $scope.devices[$scope.id].model = $scope.model;
            $scope.devices[$scope.id].color = $scope.color;
            $scope.devices[$scope.id].price = $scope.price;
        }
    }

    $scope.isReverse = false;
    $scope.sortBy = function(element) {
        $scope.column = element.currentTarget.value.toLowerCase();
        if ($scope.isReverse) {
            $scope.isReverse = false;
        }else {
            $scope.isReverse = true;
        }
    }
    
    
}