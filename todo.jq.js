(function($){
    document.addEventListener('DOMContentLoaded', function() {

    })

    $(function(){

    });

    var dom = $('#todo'),
        add_input = dom.find('.js_add_input'),
                    // $(dom, '.js_add_input')
        add_btn = dom.find('.js_add_button'),
        list = dom.find('.js_list'), // ul
        // list_arr = JSON.parse(localStorage.getItem('todo') || '[]'),
        list_arr = $.parseJSON(localStorage.getItem('todo') || '[]');
        item_template = $('#todo_item_template').text();

        
    function save() {
        localStorage.setItem('todo', JSON.stringify(list_arr))
        // localStorage.todo = JSON.stringify(list_arr);
    }

    function buildList() {
        list.html('');
        /* list_arr.forEach(function(text, index)  {
            var item = makeItem(text);
            list.appendChild(item);
            setItemActions(item, index);
        }); */

        $(list_arr).each(function(index, text){
            var item = makeItem(text);
            list.append(item);
            setItemActions(item, index);
        })


    };

    function makeItem(value) {
        var li = $('<li>');
        // li.innerHTML = item_template.replace(/{{val}}/g, value);
        li.html(item_template.replace(/{{val}}/g, value));
        return li;
    }

    function setItemActions(item, index) {
        var remove_btn = item.find('.js_item_remove_btn'),
            edit_btn = item.find('.js_item_edit_btn'),
            edit_input = item.find('.js_item_input'),
            item_text = item.find('.js_item_text');
        remove_btn.on('click', function() {
            list_arr.splice(index, 1);
            changeAction();
        });

        edit_btn.on('click', function() {
            //edit_input.style.display = 'inline-block';
            edit_input.show();
            // item_text.style.display = 'none';
            item_text.hide();
        })
    }

    function changeAction() {
        buildList();
        save();
    }

    add_btn.on('click', function() {
        var text = add_input.val();
        list_arr.push(text);
        add_input.val('');
        changeAction();
    });



    buildList();

}(jQuery))