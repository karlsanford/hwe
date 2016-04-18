app.controller('contactController',['$scope','$http',contactController]);

function contactController($scope,$http){
	$http.get('/api/guests').success(function(data){
		$scope.guests = data;
	});
	$scope.isAdmin = false;
	$scope.message = "Contact";
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