app.controller('homeController',['$scope','$http',homeController]);


function homeController($scope,$http){
	$http.get('/api/meetups').success(function(data){
		$scope.meetups = data;
	});
	
	$scope.message = "hello from angular";
	$scope.createMeetup = function(){
		$http.post('/api/meetups',{name:$scope.meetupName}).success(function(data){
			$scope.meetups.push(data);
		})
	}
}