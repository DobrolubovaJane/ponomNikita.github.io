var app = angular.module("app", ["ngRoute", 'ui.bootstrap']);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "app/views/main.html",
            controller: "ContentController"
        })
        .when("/gallery", {
            templateUrl : "app/views/gallery.html",
            controller: "GalleryController"
        });
});