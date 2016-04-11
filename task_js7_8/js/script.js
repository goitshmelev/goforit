$(function() {
    var $tabOne = $('.tabs__one');
    var $сontentOne = $('.one');
    var $tabTwo = $('.tabs__two');
    var $contentTwo = $('.two');
    var $tabThree = $('.tabs__three');
    var $contentThree = $('.three');

    $tabOne.on('click', function() {
        $tabOne.attr('id', 'tabs-active');
        $tabTwo.removeAttr('id', 'tabs-active');
        $tabThree.removeAttr('id', 'tabs-active');
        $сontentOne.show();
        $contentTwo.hide();
        $contentThree.hide();
    });

    $tabTwo.on('click', function() {
        $tabOne.removeAttr('id', 'tabs-active');
        $tabTwo.attr('id', 'tabs-active');
        $tabThree.removeAttr('id', 'tabs-active');
        $сontentOne.hide();
        $contentTwo.show();
        $contentThree.hide();
    });

    $tabThree.on('click', function() {
        $tabOne.removeAttr('id', 'tabs-active');
        $tabTwo.removeAttr('id', 'tabs-active');
        $tabThree.attr('id', 'tabs-active');
        $сontentOne.hide();
        $contentTwo.hide();
        $contentThree.show();
    });


    var $firstName = $('.input__firstname');
    var $lastName = $('.input__lastname');
    var $address = $('.input__address');
    var $button = $('button');

    $firstName.hover(function() {
        $('.hint__firstname').css({opacity: 1});
    }, function() {
        $('.hint__firstname').css({opacity: 0});
    });

    $lastName.hover(function() {
        $('.hint__lastname').css({opacity: 1});
    }, function() {
        $('.hint__lastname').css({opacity: 0});
    });

    $address.hover(function() {
        $('.hint__address').css({opacity: 1});
    },  function() {
        $('.hint__address').css({opacity: 0});
    });

    $button.on('click', function() {
        $('.hint').css({opacity: 1});
    })
});