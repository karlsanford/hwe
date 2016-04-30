app.controller('resumeController',['$scope','toastr',resumeController]);

function resumeController($scope,toastr){
    $scope.title = "Resume";
    $scope.showModal = showModal;

    /*toastr.info('FYI','This site was built with Angular, Express, Node, and MongoDB.',{
        closeButton: true,
        autoDismiss: false
    });*/

    function showModal(){
        setTimeout(function(){
            $('#modalResumeWelcome').modal('show');
        },500);
    }

    function init(){
        showModal();
    }

    init();

}