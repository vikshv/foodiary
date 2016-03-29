import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMessages from 'angular-messages';
import firebase from 'firebase';
import angularfire from 'angularfire';

export default angular.module('app', [uiRouter, ngMessages, 'firebase']);
