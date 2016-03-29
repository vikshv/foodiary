import app from '../../../app';
import template from './template.html';
import './style.less';

export default app.component('foodToolbar', {
    template,

    bindings: {
        checked: '<',
        handlers: '<'
    },
    
    controller: function() {
        this.onClickDelete = () => {
            this.handlers.onClickDelete();
        };
    }
});
