function GoogleCustomSearch(){
    var search = document.getElementById('search').value;
    console.log('Search: ', search);
    $.getJSON('http://api.riffsy.com/v1/search?tag=' + search + '&limit=10',
        function(data){
            $("#contentId").empty();
            console.log('Data', data);
            $.each(data.results, function(i, results){
                $("<img/>").attr("src", results.itemurl).appendTo("#contentId");
                $("#contentId").append('<p class="titleRes">' + results.title + '</p>');
                if ( i == 10 ) return false;
            });
        });
};

$(window).keypress(function(event){
    switch (event.keyCode) {
        case 13:
            GoogleCustomSearch();
            break;
    };
});

$(function (){
    $("#btn-search").click(function(){
        GoogleCustomSearch();
    });
});
