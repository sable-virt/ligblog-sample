var data = [];
for (var i = 0; i < 500; i++) {
    data.push({
        id: i,
        name: 'User' + i,
        value: Math.random() * 500
    });
}
angular.module('app',[]).constant('USERS', data);