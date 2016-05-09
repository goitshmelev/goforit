$(function() {
    $(document).script_slider();

    var html = $('#second_task_tmpl').html();
    var data = {
        name: "Шмелев Сергей Николаевич",
        photo: "img/foto.jpg",
        about: "Государственный служащий",
        reason1: "Мне это очень и очень интересно",
        reason2: "Хочу поменять род деятельности в сторону IT индустрии",
        reason3: "Теряю квалификацию в гоструктурах",
        mobile: "+380555555555",
        link: "https://facebook.com",
        feedback: "Приложу все усилия для осуществления своей мечты!"
    };

    var content = tmpl(html, data);
    $('body').append(content);
});
