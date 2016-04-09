import app from '../../app';
import controller from './calendarWeekController';
import template from './template.html';
import './style.less';

export default app.component('calendarWeek', {
    template,
    controller,
    bindings: {
        date: '<',
        handlers: '<'
    }
});
