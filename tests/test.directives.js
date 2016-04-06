

describe('directive', function() {

    beforeEach(angular.mock.module('app'));

    let UserService;
    let element;

    beforeEach(angular.mock.inject(function($q, $rootScope, $compile, _UserService_) {
        UserService = _UserService_;
        
        const deferred = $q.defer();

        spyOn(UserService, 'getOne').and.returnValue(deferred.promise);
        deferred.resolve({ name: 'Bob' });

        element = angular.element('<user-card user="user"></user-card>');

        const $scope = $rootScope.$new(); // создание скоупа

        $scope.user = { name: 'Bob' };

        $compile(element)($scope);  // компиляция тестируемой директивы  в скоуп

        // получение скоупа элемента (для унаследованного от родителя)
        scope = element.scope();

        // получение скоупа элемента (для изолированного)
        scope = element.isolateScope();
    }));

    it('should call UserService', function() {
        scope.someMethod();
        expect(UserService.getOne).toHave
    });

    it('should set user', function() {

    });


});
