import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMessages from 'angular-messages';
import firebase from 'firebase';
import angularfire from 'angularfire';

import './components/navbar';
import './components/footer';
import './components/home';
import './components/calendar';
import './components/diary';
import './components/about';
import './components/food';

export default angular.module('app', [
    uiRouter,
    ngMessages,
    'firebase',
    'navbar',
    'footer',
    'home',
    'about',
    'food',
    'calendar',
    'diary'
]);
