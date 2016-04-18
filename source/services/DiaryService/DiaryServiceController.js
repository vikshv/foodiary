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

    removeItem(item, options) {
        const list = this._getList(options);
        return list.$loaded()
            .then(() => {
                const record = list.$getRecord(item.$id);
                return list.$remove(record);
            })
            .catch(error => {
                throw Error(error);
            });
    }

    editItem(data, options) {
        const list = this._getList(options);
        return list.$loaded()
            .then(() => {
                const record = list.$getRecord(data.$id);
                const { time, shortName, weight, energy, carbohydrate, fat, protein } = data;
                Object.assign(record, {
                    shortName,
                    carbohydrate,
                    fat, 
                    protein, 
                    energy, 
                    time, 
                    weight
                });
                return list.$save(record);
            })
            .catch(error => {
                throw Error(error);
            });
    }

    _getList(options) {
        const auth = this.AuthService.getAuth();
        const diaryUrl = this.UrlsService.getDiaryUrl(auth.uid);
        const { year, month, day } = options;
        const url = `${diaryUrl}/${year}/${month}/${day}`;
        return this.$firebaseArray(new Firebase(url));
    }
}
