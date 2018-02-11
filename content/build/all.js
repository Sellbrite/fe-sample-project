'use strict';

;(function () {
    'use strict';

    angular.module('client', [
    //3rd party
    'ui.router',

    //services
    'client.services',

    //views & controllers
    'client.site']);

    angular.module('client').config(RouteConfig).run(StateErrorHandler);

    StateErrorHandler.$inject = ['$rootScope', '$log'];

    function StateErrorHandler($rootScope, $log) {
        $rootScope.$on('$stateChangeError', function (info) {
            return $log.log(info);
        });
    }

    RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function RouteConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('client.site', ['ui.router']);

    angular.module('client.site').config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider'];

    function RouteConfig($stateProvider) {
        $stateProvider.state('site', {
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
        });
    }

    getAllProducts.$inject = ['productsService'];

    function getAllProducts(productsService) {
        return productsService.readAll().then(function (products) {
            return products.items;
        });
    }
})();
'use strict';

;(function () {
    'use strict';

    angular.module('client.services', []);
})();
'use strict';

;(function () {
    'use strict';

    angular.module('client.site').controller('productsController', ProductsController);

    ProductsController.$inject = ['products'];

    function ProductsController(products) {
        var vm = this;

        //public vars
        var totalPrice = 0;
        vm.products = null;
        vm.currentCart = [];
        vm.cartIsLoaded = false;

        //public functions
        vm.addItem = _addItem;
        vm.removeItem = _removeItem;
        vm.getTotal = _getTotal;
        vm.getTotalItems = _getTotalItems;
        vm.showCart = _showCart;
        vm.hideCart = _hideCart;

        init();

        function init() {
            vm.products = products.products;
            vm.products.map(_readMapping);
        }

        function _readMapping(model) {
            var product = model;
            //reshape price (casting to Int to handle strings)
            product.price = Number((model.price / 100).toFixed(2));
            return product;
        }

        //_addItem and _removeItem update total price var

        function _addItem(item) {
            vm.currentCart.push(item);
            totalPrice += item.price;
        }

        function _removeItem(index, item) {
            totalPrice -= item.price;
            vm.currentCart.splice(index, 1);
        }

        function _getTotal() {
            return totalPrice;
        }

        function _getTotalItems() {
            var totalItems = vm.currentCart.length || 0;
            return totalItems;
        }

        function _showCart() {
            if (vm.cartIsLoaded === false) {
                vm.cartIsLoaded = true;
            }
        }

        function _hideCart() {
            if (vm.cartIsLoaded === true) {
                vm.cartIsLoaded = false;
            }
        }
    }
})();
'use strict';

;(function () {
    angular.module('client.services').factory('productsService', ProductsService);

    ProductsService.$inject = ['$http', '$q'];

    function ProductsService($http, $q) {
        return {
            readAll: _readAll
        };

        function _readAll() {
            return $http.get('/api/products').then(xhrSuccess).catch(onError);
        }

        //response handlers
        function xhrSuccess(response) {
            return response.data;
        }

        function onError(error) {
            console.log(error.data);
            return $q.reject(error.data);
        }
    }
})();