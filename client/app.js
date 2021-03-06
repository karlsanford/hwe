var app = angular.module('mainApp',['ngAnimate','ui.router','toastr']);

app.config(function($stateProvider, $urlRouterProvider){
   $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('home',{
            url: "/home",
            templateUrl: 'views/partials/home.html'
        })
        .state('about',{
            url: '/about',
            templateUrl: "views/partials/about.html"
        })
        .state('contact',{
            url: '/contact',
            templateUrl: "views/partials/contact.html"
        })
        .state('engage',{
            url: '/engage',
            templateUrl: "views/partials/engage.html"
        })
        .state('blog',{
            url: '/blog',
            templateUrl: "views/partials/blog.html"
        }).state('account',{
            url: '/account',
            templateUrl: "views/partials/account.html"
        }).state('users',{
        url: '/users',
        templateUrl: "views/partials/users.html"
        }).state('resume',{
        url: '/resume',
        templateUrl: "views/partials/resume.html"
    });

});