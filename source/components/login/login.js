import app from './app';
import './loginConfig';
import controller from './loginController';
import template from './template.html';
import './style.less';

const componentName = 'login';

app.component(componentName, {
    template,
    controller
});

export default componentName;
