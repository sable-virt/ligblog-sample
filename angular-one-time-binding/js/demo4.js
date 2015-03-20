angular.module('app').controller('RootCtrl',[
    '$scope',
    'USERS',
    function($scope,USERS) {
        $scope.users = USERS;
        $scope.title = 'demoです';
        $scope.change = function() {
            $scope.title = 'タイトルを変更しました';
        }
    }
]);