export default class UrlsServiceController {
    constructor() {
        this.baseUrl = 'https://foodiary.firebaseio.com';
    }

    getAuthUrl() {
        return this.baseUrl;
    }

    getFoodsUrl(uid) {
        return `${this.baseUrl}/${uid}/food`;
    }

    getDiaryUrl(uid) {
        return `${this.baseUrl}/${uid}/diary`;
    }
}
