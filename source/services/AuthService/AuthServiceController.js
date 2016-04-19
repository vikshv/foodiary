export default class AuthServiceController {
    /* @ngInject */
    constructor($firebaseAuth, UrlsService) {
        const url = UrlsService.getAuthUrl();
        this.auth = $firebaseAuth(new Firebase(url));
    }

    getAuth() {
        return this.auth.$getAuth();
    }

    waitForAuth() {
        return this.auth.$waitForAuth();
    }

    requireAuth() {
        return this.auth.$requireAuth();
    }

    authAnonymously() {
        return this.auth.$authAnonymously({ remember: 'sessionOnly' })
            .then(authData => {
                this.authData = authData;
            });
    }

    logout() {
        this.auth.$unauth();
    }

    onAuth(callback) {
        this.auth.$onAuth(callback);
    }

    authWithPassword(options) {
        const { email, password, remember } = options;
        return this.auth.$authWithPassword({
            email,
            password
        })
        .then(authData => {
            this.authData = authData;
        })
        .catch(error => {
            throw Error(error);
        })
    }

    createUser(options) {
        const { email, password } = options;
        return this.auth.$createUser({
            email,
            password
        })
        .then(userData => {
            return this.authWithPassword(options);
        })
        .then(authData => {
            this.authData = authData;
        })
        .catch(error => {
            throw Error(error);
        })
    }
}
