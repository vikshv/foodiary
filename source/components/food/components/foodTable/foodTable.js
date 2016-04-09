import app from '../../app';
import controller from './foodTableController';
import template from './template.html';
import './style.less';

export default app.component('foodTable', {
    template,

    bindings: {
        list: '<',
        loading: '<',
        handlers: '<'
    },

    controller: [controller]
});
