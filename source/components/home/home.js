import app from './app';
import './homeConfig';
import controller from './homeController';
import template from './template.html';
import './style.less';

const componentName = 'home';

app.component(componentName, {
    template,
    controller
});

export default componentName;
