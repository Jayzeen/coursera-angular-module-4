(function () {
    'use strict';
    angular.module('MenuApp')
        .controller('CategoriesController', CategoriesController);

    // Inject resolved 'categories' from the UI state
    CategoriesController.$inject = ['categories'];
    function CategoriesController(categories) {
        var categoriesCtrl = this;
        categoriesCtrl.categories = categories;
    }
})();