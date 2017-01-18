import angular from 'angular'
import ngRoute from 'angular-route'

import { DoyenFilter } from './doyen.filter'
import { MyFirstController } from './my-first.controller'
import { UserService } from './user.service'
import { UserController} from './user.controller'

angular.module('app', [ngRoute])

    .controller('MyFirstController', MyFirstController)
    .controller('UserController', UserController)
    .filter('doyen', DoyenFilter)
    .service('UserService', UserService)
    .value('Version', '1.0.0')
    .config(function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true)
        $routeProvider.when('/', {
            template: '<h1>Bienvenue</h1>'
        })
        $routeProvider.when('/about', {
            template: '<h1>A propos</h1>'
        })
        $routeProvider.when('/users', {
            templateUrl: 'users.html',
            controller: 'MyFirstController',
            controllerAs: 'ctrl'
        })
        $routeProvider.when('/user/:id', {
            templateUrl: 'user.html',
            controller: 'UserController',
            controllerAs: 'UserCtrl'
        })
    })
    .run(function() {
        console.log('Application in action !')
    })
