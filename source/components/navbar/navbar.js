import app from './app';
import NavbarController from './NavbarController';
import template from './template.html';
import './style.less';

export default app.component('navbar', {
    bindings: {},
    template,
    controller: NavbarController,
});
