; (function () {
    angular.module('client.services')
        .factory('productsService', ProductsService)

    ProductsService.$inject = ['$http', '$q']

    function ProductsService($http, $q) {
        return {
            readAll: _readAll
        }

        function _readAll() {
            return $http.get('/api/products')
                .then(xhrSuccess)
                .catch(onError)
        }

        //response handlers
        function xhrSuccess(response) {
            return response.data
        }

        function onError(error) {
            console.log(error.data)
            return $q.reject(error.data)
        }
    }

})();