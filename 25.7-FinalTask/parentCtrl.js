module.controller("parentCtrl", ParentCtrl);

function ParentCtrl($scope) {   
    $scope.fillArray = function() {
        $scope.arr = [];
        for(i = 0; i < 6; i++) {
            let num = Math.floor((Math.random() * 9) + 0);
            $scope.arr.push(num);
            $scope.arr.push(num);
            console.log(num);
        }
        $scope.arr = $scope.shuffleArray($scope.arr);
    }

    $scope.shuffleArray = function(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;  
    }

    $scope.flipCard = function() {
        
    }
}