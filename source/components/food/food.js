import app from './app';
import './foodConfig';
import './components/foodToolbar';
import './components/foodTable';
import './components/foodItem';
import template from './template.html';
import './style.less';

export default app.component('food', {
    template,
    
    controller: function(FoodService) {
        this.loading = true;
        this.checked = false;

        FoodService.getList().then(list => {
            this.list = list;
            this.loading = false;
        });

        this.toolbarHandlers = {
            onClickDelete: () => {
                this.list.forEach(item => {
                    if (item.checked) {
                        FoodService.removeItem(item);
                    }
                });
                this.checked = false;
            }
        };

        this.tableHandlers = {
            onChangeChecked: () => {
                this.checked = this.list.some(item => item.checked);
            }
        };
    }
});
