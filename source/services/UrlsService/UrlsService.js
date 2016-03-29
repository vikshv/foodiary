import app from '../../app';

export default app.service('UrlsService', function() {
    this.getFoodsUrl = () => 'https://foodiary.firebaseio.com/food';
});
