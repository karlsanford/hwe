app.controller('mainController',[$scope,$http,mainController]);

function mainController($scope,$http){
    $scope.login = login;
    $scope.signup = signup;
    $scope.signupMode = false;


    function login() {
        var user = {
            username: $scope.username,
            password: $scope.password
        }
        $http.post('/api/authenticate',user).success(function(data){
            $scope.user = data;
        });
    }

     function(){

    }
}