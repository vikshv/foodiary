import app from './app';

app.config(function($stateProvider) {
    $stateProvider.state('diary', {
        url: '/diary/:period?date',
        template: '<diary period="$ctrl.period" date="$ctrl.date"></diary>',
        controller: function($stateParams) {
            this.period = $stateParams.period;
            this.date = $stateParams.date;
        },
        controllerAs: '$ctrl'
    });
});
