export default class FoodServiceController {
    /* @ngInject */
    constructor($firebaseArray, UrlsService, AuthService) {
        this.$firebaseArray = $firebaseArray;
        this.UrlsService = UrlsService;
        this.AuthService = AuthService;
    }

    getList() {
        return this._getList().$loaded();
    }

    getItem(id) {
        return this._getList().$getRecord(id);
    }

    addItem(data) {
        return this._getList().$add(data);
    }

    removeItem(item) {
        return this._getList().$remove(item);
    }

    editItem(item) {
        return this._getList().$save(item);
    }

    _getList() {
        if (!this.list) {
            this.list = this._createList();
        }
        return this.list;
    }

    _createList() {
        const auth = this.AuthService.getAuth();
        const url = this.UrlsService.getFoodsUrl(auth.uid);
        return this.$firebaseArray(new Firebase(url));
    }
}
