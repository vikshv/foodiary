export default class RegisterController {
    constructor($scope, AuthService, $state) {
        this.$scope = $scope;
        this.AuthService = AuthService;
        this.$state = $state;

        this._initForm();
    }

    _initForm() {
        this.auth = {
            email: null,
            password: null
        };
    }

    isHasError(attrName) {
        const item = this.$scope.auth[attrName];
        return item.$invalid && item.$dirty && item.$touched;
    }

    submit() {
        this.progress = true;
        this.AuthService.createUser(this.auth)
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
