import app from './app';

app.config(function($stateProvider) {
    $stateProvider.state('register', {
        url: '/register',
        template: '<register></register>',
        resolve: {
            register: function($q, AuthService) {
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
