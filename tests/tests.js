
describe('App', function() {

    beforeEach(angular.mock.module('app'));

    it('first test', angular.mock.inject(function(FoodService) {
        expect(true).toBe(true);
    }));

    describe('service FoodService', function() {

        var FoodService;
        var $httpBackend;
        var mockList = [
            {
                shortName: 'Bananas'
            }
        ];

        beforeEach(inject(function(_FoodService_, _$httpBackend_) {
            FoodService = _FoodService_;
            $httpBackend = _$httpBackend_;
            $httpBackend.whenGET('https://foodiary.firebaseio.com/food').respond(mockList);
        }));

        it('should get list', function(done) {
            FoodService.getList()
                .then(function(list) {
                    expect(list).toEqual(mockList);
                    done();
                })
                .catch(function(error) {
                    throw Error(error);
                });

            $httpBackend.flush();
        });

    });

});
