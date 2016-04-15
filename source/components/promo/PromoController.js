export default class PromoController {
    constructor(AuthService, $state) {
        this.AuthService = AuthService;
        this.$state = $state;
    }

    begin() {
        this._startBeginProgress();
        this.AuthService.authAnonymously()
            .then(() => {
                this._gotoDiaryState();
            })
            .catch(error => {
                this._stopBeginProgress();
                throw Error(error);
            });
    }

    login() {

    }

    _startBeginProgress() {
        this.progress = true;
        this.beginProgress = true;
    }

    _stopBeginProgress() {
        this.progress = false;
        this.beginProgress = false;
    }

    _gotoDiaryState() {
        this.$state.go('diary');
    }
}
