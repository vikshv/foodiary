import app from '../../app';
import template from './template.html';
import './style.less';

app.component('foodToolbar', {
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
