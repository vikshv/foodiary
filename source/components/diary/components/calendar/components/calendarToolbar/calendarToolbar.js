import app from '../../../../../../app';
import controller from './calendarToolbarController';
import template from './template.html';
import './style.less';

export default app.component('calendarToolbar', {
    template,

    bindings: {
        period: '=',
        date: '='
    },
    
    controller: [controller]
});
