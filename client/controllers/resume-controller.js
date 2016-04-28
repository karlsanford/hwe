app.controller('resumeController',['$scope',resumeController]);

function resumeController($scope){
    $scope.title = "Resume";
    $scope.showModal = showModal;

    function showModal(){
        //$(window).load(function(){
            $('#modalResumeWelcome').modal('show');
        //});
    }

    function init(){
        showModal();
    }

    init();



}