(function () {
    'use strict';

    angular.module('MenuData')
        .constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com')
        .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http', 'ApiBasePath'];
    function MenuDataService($http, ApiBasePath) {
        var service = this;

        service.getAllCategories = function () {
            return $http({
                url: ApiBasePath + '/categories.json',
                method: 'GET'
            }).then(function (response) {
                // success callback
                return response.data;
            }).catch(function (error) {
                // catch-all error callback
                console.log(error);
            });
        };

        service.getItemsForCategory = function (categoryShortName) {
            return $http({
                method: 'GET',
                url: ApiBasePath + '/menu_items.json?category=' + categoryShortName
            }).then(function (response) {
                return response.data.menu_items;
            }).catch(function (error) {
                console.log(error);
            });
        };
    }

})();