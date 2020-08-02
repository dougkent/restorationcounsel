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
        .when("/meet-alyssa", {
            templateUrl: "js/meet-alyssa.component.html"
        })
        .when("/contact", {
            templateUrl: "js/contact.component.html"
        })
        .when("/forms", {
            templateUrl: "js/forms.component.html"
        })
        .when("/what-to-expect", {
            templateUrl: "js/what-to-expect.component.html"
        })
        .otherwise("/");
})