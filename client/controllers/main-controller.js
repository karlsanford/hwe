app.controller('mainController',['$scope','$http','$state',mainController]);

function mainController($scope,$http,$state){
    var loggedOutMessage = 'Login'
    $scope.controllerTitle = 'mainController';
    $scope.login = login;
    $scope.signup = signup;
    $scope.logout = logout;
    $scope.signupMode = false;
    $scope.loggedin = false;
    $scope.dropdownmessage = loggedOutMessage;
    $scope.currentYear = new Date().getYear() + 1900;


    function login() {
        console.log('login');
        var user = {
            username: $scope.username,
            password: $scope.password
        }
        $http.post('/api/users/authenticate',user).success(function(data){
            if(data.result == "success") {
                loginSuccess(data);
            }
        });
    }
    function loginSuccess(data){
        $scope.user = data.user;
        $scope.dropdownmessage = $scope.user.username;
        $scope.loggedin = true;
        $scope.username = '';
        $scope.password = '';
        $scope.confirmPassword = '';
    }
     function signup(){
         console.log("signup");
         return true;
    }
    function logout(){
        $state.go('home');
        $scope.user = '';
        $scope.loggedin = false;
        $scope.signupMode = false;
        $scope.dropdownmessage = loggedOutMessage;
    }
}