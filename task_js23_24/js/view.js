define(
     'view',
     ['jquery'],
     function() { return { view: view = function (model) {
          var self = this;
          function init () {
            var html = $('#templating').html();
            var wrapper = tmpl(html);
            $('body').append(wrapper);

            self.elements = {
              input: $('.templating__header-input'),
              listContainer: $('.templating__ul'),
            };

            self.renderList(model.data);
          };

          self.renderList = function(data) {
              var list  = tmpl($('#templating__records').html(), {data: data});
              self.elements.listContainer.html(list);
          };

          init();
        }
     };
    }
);