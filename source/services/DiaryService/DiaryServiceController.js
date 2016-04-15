export default class DiaryServiceController {
    /* @ngInject */
    constructor($firebaseArray, UrlsService, AuthService) {
        this.$firebaseArray = $firebaseArray;
        this.UrlsService = UrlsService;
        this.AuthService = AuthService;
    }

    getList(options) {
        return this._getList(options).$loaded();
    }

    // getItem(id) {
    //     return this._getList().$getRecord(id);
    // }

    addItem(data, options) {
        return this._getList(options).$add(data);
    }

    // removeItem(item) {
    //     return this._getList().$remove(item);
    // }

    // editItem(item) {
    //     return this._getList().$save(item);
    // }

    _getList(options) {
        const auth = this.AuthService.getAuth();
        const diaryUrl = this.UrlsService.getDiaryUrl(auth.uid);
        const { year, month, day } = options;
        const url = `${diaryUrl}/${year}/${month}/${day}`;
        return this.$firebaseArray(new Firebase(url));
    }
}
