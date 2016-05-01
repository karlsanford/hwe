app.controller('resumeController',['$scope','toastr',resumeController]);

function resumeController($scope,toastr){
    $scope.title = "Resume";
    $scope.showModal = showModal;
    $scope.languages = [
        { skill: 'JavaScript' , level: 15 , highlighted:'highlighted'},
        { skill: 'HTML / CSS' , level: 15},
        { skill: 'AngularJS' , level: 2},
        { skill: 'Node / Express' , level: 2},
        { skill: 'MongoDB' , level: 2},
        { skill: 'GIT' , level: 3},
        { skill: 'REST' , level: 6},
        { skill: 'oData' , level: 2},
        { skill: 'JSON' , level: 5},
        { skill: 'PHP' , level: 2},
        { skill: 'MS Excel' , level: 15},
        { skill: 'MS SQL' , level: 5},
        { skill: 'VBA' , level: 5},
        { skill: 'C#' , level: 2},
        { skill: 'XML' , level: 5},
        { skill: 'MS Office' , level: 15},
        { skill: 'MS Project' , level: 10},
        { skill: 'SharePoint' , level: 6},
        { skill: 'Visual Studio' , level: 3},
        { skill: 'Eclipse IDE' , level: 2},
        { skill: 'WebStorm' , level: 3},
        { skill: 'JavaScript' , level: 10}
    ];
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

    //init();

}