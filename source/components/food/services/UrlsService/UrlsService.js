import app from '../../app';

app.service('UrlsService', function() {
    this.getFoodsUrl = () => 'https://foodiary.firebaseio.com/food';
});
