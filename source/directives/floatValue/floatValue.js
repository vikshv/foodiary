import app from '../../app';

app.directive('floatValue', function($filter) {
    return {
        restrict: 'A',

        require: 'ngModel',

        link: function(scope, element, attrs, ngModel) {
            const regexp = /^\d+(\.\d*)?$/;
            
            ngModel.$formatters.unshift(function(modelValue) {
                return $filter('number')(parseFloat(modelValue), 2);
            });

            ngModel.$parsers.unshift(function(viewValue) {
                const result = viewValue.replace(',', '.');
                if (regexp.test(result)) {
                    return parseFloat(result);
                } else {
                    return '';
                }
            });

        }
    };
});
