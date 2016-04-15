import app from './app';

app.config(function($stateProvider) {
    $stateProvider.state('promo', {
        url: '/promo',
        template: '<promo></promo>',
        resolve: {
            auth: function($q, AuthService) {
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
