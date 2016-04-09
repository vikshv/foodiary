import app from '../../app';
import controller from './calendarToolbarController';
import template from './template.html';
import './style.less';

app.component('calendarToolbar', {
    template,
    controller,
    bindings: {
        period: '<',
        date: '=',
        handlers: '<'
    }
});
