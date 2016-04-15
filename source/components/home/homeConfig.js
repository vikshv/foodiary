import app from './app';

app.config(function($stateProvider) {
    $stateProvider.state('home', {
        url: '/home',
        template: '<home><home>',
        resolve: {
            auth: function(AuthService) {
                return AuthService.waitForAuth();
            }
        }
    });
});
