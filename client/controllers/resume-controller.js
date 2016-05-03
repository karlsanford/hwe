app.controller('resumeController',['$scope','toastr',resumeController]);

function resumeController($scope,toastr){
    $scope.title = "Resume";
    $scope.showModal = showModal;
    $scope.technologies = [
        { title: 'JavaScript' , years: 15 },
        { title: 'HTML / CSS' , years: 15},
        { title: 'AngularJS' , years: 2},
        { title: 'Node / Express' , years: 2},
        { title: 'MongoDB' , years: 2},
        { title: 'jQuery', years: 6 },
        { title: 'GIT' , years: 3},
        { title: 'REST' , years: 6},
        { title: 'oData' , years: 2},
        { title: 'JSON' , years: 5},
        { title: 'PHP' , years: 2},
        { title: 'MS Excel' , years: 15},
        { title: 'MS SQL' , years: 5},
        { title: 'VBA' , years: 5},
        { title: 'C#' , years: 2},
        { title: 'XML' , years: 5},
        { title: 'XSLT' , years: 2},
        { title: 'MS Office' , years: 15},
        { title: 'MS Project' , years: 10},
        { title: 'SharePoint' , years: 6},
        { title: 'Visual Studio' , years: 3},
        { title: 'Eclipse IDE' , years: 2},
        { title: 'WebStorm' , years: 3}
    ];
    $scope.summary = {
        paragraphs: [
            'Karl has a multidisciplinary skill-set with an emphasis ' +
            'around technology-based problem solving and software ' +
            'development.',
            'In his career, Karl has worked with everything from VBA ' +
            'to HTML but most recently has been focused on full-stack ' +
            'JavaScript web applications.',
            'Throughout his career, Karl has leveraged technology' +
            ' and built applications to solve real world problems ' +
            ' (and just for fun).'
        ]
    };

    $scope.projects = [
        {title:'SAP Implementation',
        startDate: 'Nov 2013',
        endDate: 'Nov 2014',
        paragraphs:[
            'Co-Sponsored SAP greenfield deployment with CIO. Duties ' +
            'included hardware design, Blueprint, and Realization and ' +
            'development of a custom responsive web-based sales ' +
            'application.',
            'Within this project I provided oversight to the ' +
            'implementation consults to overall design and company ' +
            'wide business processes, coordinated with EDI trading ' +
            'partners for cutovers, built a web based cXML "punch ' +
            'out" integration with Cisco Commerce Workspace, ' +
            'built a custom excel import module for importing and ' +
            'parsing orders from spreadsheets, and built oData ' +
            'Webservices in SAP backend to support Sales Order ' +
            'Application.',
            'Technologies: HTML, JavaScript, SAP UI5, HANA, HANA XS, ' +
            'ABAP, Eclipse IDE, oData, RESTful Webservices, cXML'
        ],
        technologies:['HTML', 'JavaScript', 'SAP UI5', 'HANA', 'HANA XS', +
            'ABAP', 'Eclipse IDE', 'oData', 'RESTful Webservices', 'cXML']
        }
    ];
    $scope.skills = [
        {title:'Web Development'},
        {title:'Information Architecture'},
        {title:'UI / UX Design'},
        {title:'ERP Design'},
        {title: 'Integration'},
        {title:'SharePoint Development'},
        {title:'Business Analytics'},
        {title:'Data Analytics'},
        {title:'Data Mapping'},
        {title:'Project Management'},
        {title:'Scheduling'}
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