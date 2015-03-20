angular.module('app').controller('RootCtrl',[
    '$scope',
    '$interval',
    function($scope,$interval) {
        $scope.count = 0;
        $interval(function() {
            $scope.count++;
        },1000);
    }
]);