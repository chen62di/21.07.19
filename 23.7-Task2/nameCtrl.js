module.controller("nameCtrl", NameCtrl);

function NameCtrl($scope) {
    $scope.$watch("name", function(newName) {
        if (newName === "chen") {
            alert(`Thats my name!`);
        }
    })
}


