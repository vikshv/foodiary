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
}
