var app = angular.module('mainApp',['ngAnimate','ui.router']);

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
        });
});