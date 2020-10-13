(function(){
  'use strict';
  angular.module('LunchChecker', [])
  .controller('LunchCheckerController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.dishes = '';
    $scope.message = '';
    $scope.checkDishes = function (dishes){
      var dishes = $scope.dishes;
      if(dishes) {
        var arrayOfDishes = dishesToArray(dishes);
        $scope.message = getMessage(arrayOfDishes.length);
      } else {
        $scope.message = 'Please enter data first';
      }
    }
  }

  function getMessage(numberOfDishes) {
    if(numberOfDishes > 3) {
      return 'Too much!';
    } else {
      return 'Enjoy!';
    }
  }

  function dishesToArray(dishes) {
    return dishes.split(',');
  }

})();
