module.controller("calcCtrl", CalcCtrl);

function CalcCtrl($scope, $rootScope) {
    $scope.calculator = new Calculator();
    $scope.saveOperator = function(element) {
        $scope.calculator.operator = element.currentTarget.value; 
    }

    $scope.doCalculate = function() {
        if ($scope.calculator.operator === '+') {
            return Number($scope.calculator.number1) + Number($scope.calculator.number2);
        }
        if ($scope.calculator.operator === '-') {
            return $scope.calculator.number1 - $scope.calculator.number2;
        }
        if ($scope.calculator.operator === '*') {
            return $scope.calculator.number1 * $scope.calculator.number2;
        }
        if ($scope.calculator.operator === '/') {
            return $scope.calculator.number1 / $scope.calculator.number2;
        }
    }
}

class Calculator {
    constructor ( num1, num2, operator, result ) {
        this.number1 = num1;
        this.number2 = num2;
        this.operator = operator;
    }
}
