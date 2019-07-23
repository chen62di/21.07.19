module.controller("formCtrl", FormCtrl);

function FormCtrl($scope) {

    
    $scope.person = new Person();
    $scope.resetName = function() {
        $scope.person.name= '';
    }
    $scope.resetAge = function() {
        $scope.person.age= '';
    }
    $scope.password = '';
    $scope.resetPassword = function() {
        $scope.person.password = '';
    }
    $scope.resetCar = function() {
        $scope.person.car = '';
    }
    $scope.resetGender = function() {
        $scope.person.gender = '';
    }
    $scope.resetVehicle = function() {
        $scope.person.vehicle = '';
    }

}

class Person{
    constructor(name, age, password, gender, car, vehicle) {
        this.name = name
        this.age = age
        this.password = password
        this.gender = gender
        this.car = car
        this.vehicle = vehicle
        this.toString = () => {
            const { name, age, password, gender, car, vehicle } = this
            return `${name} ${age} ${password} ${gender} ${car} ${vehicle}`;
        }
    }
}