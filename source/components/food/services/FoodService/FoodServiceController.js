export default class FoodServiceController {
    /* @ngInject */
    constructor($firebaseArray, UrlsService) {
        const url = UrlsService.getFoodsUrl();
        this.list = $firebaseArray(new Firebase(url));
    }

    getList() {
        return this.list.$loaded();
    }

    getItem(id) {
        return this.list.$getRecord(id);
    }

    addItem(data) {
        return this.list.$add(data);
    }

    removeItem(item) {
        return this.list.$remove(item);
    }

    editItem(item) {
        return this.list.$save(item);
    }
}
