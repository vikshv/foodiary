import app from '../../app';
import controller from './calendarMonthController';
import template from './template.html';
import './style.less';

export default app.component('calendarMonth', {
    template,
    controller,
    bindings: {
        date: '<',
        handlers: '<'
    }
});
