(function () {
    'use strict'

    angular.module('client.site', ['ui.router'])

    angular.module('client.site').config(RouteConfig)

    RouteConfig.$inject = ['$stateProvider']

    function RouteConfig($stateProvider) {
        $stateProvider
            .state('site', {
                url: '/',
                views: {
                    'root': {
                        templateUrl: 'client/products/products.html',
                        controller: 'productsController as ctrl'
                    }
                },
                resolve: {
                    products: getAllProducts
                }
            })
    }

    getAllProducts.$inject = ['productsService']

    function getAllProducts(productsService) {
        return productsService.readAll()
            .then(products => products.items)
    }

})()