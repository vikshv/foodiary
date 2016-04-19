import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMessages from 'angular-messages';
import firebase from 'firebase';
import angularfire from 'angularfire';
import uiBootstrap from 'angular-ui-bootstrap';

import './components/navbar';
import './components/footer';
import home from './components/home';
import './components/calendar';
import './components/diary';
import './components/about';
import './components/food';
import promo from './components/promo';
import login from './components/login';
import register from './components/register';

export default angular.module('app', [
    uiRouter,
    ngMessages,
    uiBootstrap,
    'firebase',
    'navbar',
    'footer',
    home,
    'about',
    'food',
    'calendar',
    'diary',
    promo,
    login,
    register
]);
