var app = angular.module("rcApp", ["ngRoute"]);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "js/home.component.html"
        })
        .when("/counseling-services", {
            templateUrl: "js/counseling-services.component.html"
        })
        .when("/emdr", {
            templateUrl: "js/emdr.component.html"
        })
        .when("/crisis-resources", {
            templateUrl: "js/crisis-resources.component.html"
        })
        .when("/about", {
            templateUrl: "js/about.component.html"
        })
        .when("/contact", {
            templateUrl: "js/contact.component.html"
        })
        .otherwise("/");
})