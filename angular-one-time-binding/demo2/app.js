angular.module('app').controller('RootCtrl',[
    '$scope',
    '$interval',
    function($scope,$interval) {
        $scope.count = undefined;
        $interval(function() {
            $scope.count = 1;
        },5000);
    }
]);