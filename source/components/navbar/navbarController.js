export default class NavbarController {
    constructor($scope, $state) {
        this.$scope = $scope;
        this.$state = $state;
        this._initState();
        this._bindEvents();
    }

    _initState() {
        this.state = {
            home: this._getState('home'),
            diary: this._getState('diary'),
            food: this._getState('food'),
            about: this._getState('about'),
        };
    }

    _getState(name) {
        return this.$state.includes(name);
    }

    _bindEvents() {
        this.$scope.$on('$stateChangeSuccess', () => {
            this._initState();
        });
    }
}
