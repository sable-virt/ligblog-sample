angular.module('app').controller('RootCtrl',[
    '$scope',
    'USERS',
    function($scope,USERS) {
        $scope.users = USERS;
    }
]);