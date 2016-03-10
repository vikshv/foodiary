import './style.less';

import app from './app';
import home from './components/home';
import diary from './components/diary';
import about from './components/about';

app.config(['$routeProvider', $routeProvider => {
    $routeProvider.
        when('/home', {
            template: '<home><home>',
        }).
        when('/diary', {
            template: '<diary></diary>',
        }).
        when('/about', {
            template: '<about></about>',
        }).
        otherwise({
            redirectTo: '/home',
        });
}]);
