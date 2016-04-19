export default class PromoController {
    constructor(AuthService, $state) {
        this.AuthService = AuthService;
        this.$state = $state;
    }

    begin() {
        this.progress = true;
        this.AuthService.authAnonymously()
            .then(() => {
                this._gotoDiaryState();
            })
            .catch(error => {
                this.progress = false;
                throw Error(error);
            });
    }

    login() {
        this.$state.go('login');
    }

    _gotoDiaryState() {
        this.$state.go('diary');
    }
}
