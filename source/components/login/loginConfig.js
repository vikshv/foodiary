import app from './app';

app.config(function($stateProvider) {
    $stateProvider.state('login', {
        url: '/login',
        template: '<login></login>',
        resolve: {
            login: function($q, AuthService) {
                return $q((resolve, reject) => {
                    AuthService.onAuth(result => {
                        if (result) {
                            reject();
                        } else {
                            resolve();
                        }
                    });
                });
            }
        }
    });
});
