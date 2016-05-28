function Model(data) {
    var self = this;
    self.data = data;
    self.addItem = function(item) {
        if(item.length === 0){
            return;
        }

        self.data.push(item);
        return self.data;
    };

    self.removeItem = function(item) {
        if(item.length === -1){
            return;
        }

        var index = self.data.indexOf(item);
        self.data.splice(index,1);
        return self.data;
    };
}

function View(model) {
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
    var list = tmpl($('#templating__records').html(), {data: data});
    self.elements.listContainer.html(list);
  };

  init();
}

function Controller(model, view) {
    var self = this;
    view.elements.input.keyup(function(event) {
        if(event.keyCode==13) {
            addItem();
        }
    });
           
    view.elements.listContainer.on('click', '.records__item-delete', removeItem);
    view.elements.listContainer.on('click', '.records__item-label', editItem);

    function addItem(){
        var item = view.elements.input.val();
        model.addItem(item);
        view.renderList(model.data);
        view.elements.input.val('');
    }
    
    function removeItem(){
        var item = $(this).attr('data-value');
        model.removeItem(item);
        view.renderList(model.data);
    }
    
    function editItem () {
         if (!$('.records__item-edit').is( ":focus" )) {
             $('.records__item').removeClass('editing');
         }

         var perem;
         document.addEventListener('click', function(event){
            if (event.target.tagName !== 'LABEL') return false;
            perem = event.target.id;
            $('.records__item[id=' + perem + ']').addClass('editing');
            $('.records__item-edit[id=' + perem + ']').val( $('.records__item-label[id=' + perem + ']').text()).focus();
            $('.records__item-label[id=' + perem + ']').hide();
            $('.records__item-label:not([id=' + perem + '])').show();
            $('.records__item-edit[id=' + perem + ']').keyup(function(event) {
                if(event.keyCode==13) { 
                 var renewItem = $('.records__item-edit[id=' + perem + ']').val();
                 var empty = renewItem.replace(/\s+/g,'');
                  
                  if(empty == ''){
                      $('.records__item[id=' + perem + ']').remove();
                  }
        
                  $('.records__item-label[id=' + perem + ']').text(renewItem);
                  $('.records__item-label[id=' + perem + ']').show();
                  $('.records__item[id=' + perem + ']').removeClass('editing');

                }
            });
         });
    }
}

$(function(){
    var toDoList = ['Pass exam','Relax','Sleep', 'Work'];
    var modelObj = new Model(toDoList);
    var viewObj = new View(modelObj);
    new Controller(modelObj, viewObj);
});

