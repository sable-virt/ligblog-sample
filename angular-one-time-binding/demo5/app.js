angular.module('app',[]).controller('RootCtrl',[
    '$scope',
    function($scope,USERS) {
        $scope.title = 'demoです';
        $scope.change = function() {
            $scope.title = 'タイトルを変更しました(' + Date.now() + ')';
        }
    }
]);

angular.module('app').controller('Child1Ctrl',[
    '$scope',
    function($scope) {
        $scope.name = '長男';
        $scope.change = function() {
            $scope.name = '長男：太郎(' + Date.now() + ')';
        }
    }
]);

angular.module('app').controller('Child2Ctrl',[
    '$scope',
    function($scope) {
        $scope.name = '次女';
        $scope.change = function() {
            $scope.name = '次女：花子(' + Date.now() + ')';
        }
    }
]);