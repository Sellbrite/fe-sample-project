;(function () {
    'use strict';

    angular.module('client.site')
        .controller('productsController', ProductsController)

    ProductsController.$inject = ['products']

    function ProductsController(products) {
        let vm = this
        
        //public vars
        let totalPrice = 0
        vm.products = null
        vm.currentCart = []
        vm.cartIsLoaded = false
        
        //public functions
        vm.addItem = _addItem
        vm.removeItem = _removeItem
        vm.getTotal = _getTotal
        vm.getTotalItems = _getTotalItems
        vm.showCart = _showCart
        vm.hideCart = _hideCart

        init()

        function init() {
            vm.products = products.products
            vm.products.map(_readMapping)
        }

        function _readMapping(model){
            let product = model
            //reshape price (casting to Int to handle strings)
            product.price = Number((model.price / 100).toFixed(2));
            return product
        }

        //_addItem and _removeItem update total price var
        
        function _addItem(item) {
            vm.currentCart.push(item)
            totalPrice += item.price 
        }

        function _removeItem(index, item){
            totalPrice -= item.price 
            vm.currentCart.splice(index, 1)
        }
        
        function _getTotal(){
            return totalPrice
        }

        function _getTotalItems(){
            let totalItems = vm.currentCart.length || 0
            return totalItems
        }

        function _showCart() {
            if (vm.cartIsLoaded === false) { vm.cartIsLoaded = true}
        }

        function _hideCart() {
            if (vm.cartIsLoaded === true) { vm.cartIsLoaded = false}
        }

    }

})();
