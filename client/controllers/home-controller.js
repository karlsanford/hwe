app.controller('homeController',['$scope','$http',homeController]);


function homeController($scope,$http){
	$http.get('/api/guests').success(function(data){
		$scope.guests = data;
	});
	
	$scope.message = "Sign the guest book!";
	$scope.createGuest = function(){
		var newGuest = {
			name: $scope.guestName,
			email: $scope.guestEmail,
			message: $scope.guestMessage
		};
		$http.post('/api/guests',newGuest).success(function(data){
			console.log(data);
			$scope.guests.push(data);
			$scope.guestName = '';
			$scope.guestEmail = '';
			$scope.guestMessage = '';
		})
	}
}