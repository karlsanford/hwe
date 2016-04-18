app.controller('engageController',['$scope','$http',engageController]);

function engageController($scope,$http){
    $scope.displayForm = true;
    $scope.message = '';
    $scope.createEngagement = function(){
        var newEngagement = {
            name: $scope.clientName,
            company: $scope.clientCompany,
            email: $scope.clientEmail,
            message: $scope.clientMessage
        };

        $http.post('/api/engagements',newEngagement).success(function(data){
            $scope.message = "Thanks. We'll be in touch.";
            $scope.displayForm = false;
        });
    }
}