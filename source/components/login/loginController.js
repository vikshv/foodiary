export default class LoginController {
    constructor($scope, AuthService, $state) {
        this.$scope = $scope;
        this.AuthService = AuthService;
        this.$state = $state;

        this._initForm();
    }

    _initForm() {
        this.auth = {
            email: null,
            password: null,
            remember: false
        };
    }

    isHasError(attrName) {
        const item = this.$scope.auth[attrName];
        return item.$invalid && item.$dirty && item.$touched;
    }

    submit() {
        this.progress = true;
        this.AuthService.authWithPassword(this.auth)
            .then(() => {
                this._gotoDiaryState();
            })
            .catch(error => {
                this.progress = false;
                throw Error(error);
            });
    }

    _gotoDiaryState() {
        this.$state.go('diary');
    }
}
