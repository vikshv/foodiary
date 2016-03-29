import app from '../../app';
import UrlsService from '../UrlsService';

export default app.service('FoodService', function($firebaseArray, UrlsService) {
    const url = UrlsService.getFoodsUrl();
    const list = $firebaseArray(new Firebase(url));

    this.getList = () => list.$loaded();

    this.getItem = id => list.$getRecord(id);

    this.addItem = data => list.$add(data);

    this.removeItem = item => list.$remove(item);

    this.editItem = item => list.$save(item);
});
