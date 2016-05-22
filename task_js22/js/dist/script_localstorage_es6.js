"use strict";

$(function () {
    var testObj = {
        question1: {
            question: "За что отвечает фронтенд?",
            answer1: "Генерация html и его отправка в браузер",
            answer2: "Работа с базой данных",
            answer3: "Создание пользовательского интерфейса"
        },

        question2: {
            question: "Какие основные языки программирования используются во фронтенд-разработке?",
            answer1: "xml, css, javascript",
            answer2: "html, css, javascript",
            answer3: "html, xss, typescript"
        },

        question3: {
            question: "Что такое html?",
            answer1: "Язык для создания анимаций",
            answer2: "Язык для отображения товаров на сайте",
            answer3: "Язык гипертекстовой разметки"
        },

        answers: {
            question1: "answer3",
            question2: "answer2",
            question3: "answer3"
        }
    };

    localStorage.setItem('Questions', JSON.stringify(testObj));

    var getItem = localStorage.getItem('Questions');
    var html = $('#templating').html();
    var data = JSON.parse(getItem);
    var content = tmpl(html, data);

    $('div.wrapper').append(content);

    $('input#button').click(function () {
        var inputs = $('input[type=radio]:checked:not(script input[type=radio])');
        var count = 0;
        var numberQuestion = $('.list-questions li:not(script li)').length;
        var numberAnswer = inputs.length;

        if (numberAnswer == numberQuestion && numberAnswer != 0) {
            for (var i = 0, j = 1; i < inputs.length; j++, i++) {
                if (inputs[i].getAttribute('value') == data.answers["question" + j]) ++count;
            }

            var result = { result: "Правильные ответы: <br/>" + count + " / " + numberQuestion };
            $('div.wrapper').append(tmpl($('#templating_modal').html(), result));
            $('input[type=radio]:checked:not(script input[type=radio])').each(function () {
                $(this).removeAttr("checked");
            });
        } else {
            $('div.wrapper').append(tmpl($('#templating_modal').html(), { result: "Ответьте на все вопросы!" }));
        }
    });

    $('body').click(function () {
        $('div.modal-backdrop.fade.in').remove();
        $('div.modal.fade.bs-example-modal-sm.in').remove();
        $('div.modal').remove;
    });
});
