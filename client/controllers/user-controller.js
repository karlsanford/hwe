app.controller('userController',['$scope','$http',userController]);

function userController($scope,$http) {
    $scope.title = 'users';
    $scope.createUser = createUser;

    $http.get('/api/users').success(function(data){
        $scope.users = data;
    });

    function createUser(){
        var user = {
            username: $scope.username,
            password: $scope.password
        };
        $http.post('/api/users/signup',user).success(function(data){
            $scope.users.push(data);
        });
    }
}