$(document).ready(function () {
    $('.show-names').on('click', function() {
        $('.assinaturas').fadeIn();
        $('.logos-img').fadeOut();
    });
    $('#voltar').on('click', function() {
    	$('.assinaturas').fadeOut();
        $('.logos-img').fadeIn();
    });

    window.whoSigned = function(d){
        var $names = $("<ol />");
        $.each(d.feed.entry,function(i,line){
            $("<li />").text(line.title["$t"]).appendTo($names);
        });
        $names.appendTo(".apoios .assinaturas");
    };

    var url = "https://spreadsheets.google.com/feeds/list/1NtVELi63fKBFK7TcEbxUdlqMlTG1D_x36PznLTXaaEE/001/public/basic?alt=json-in-script&callback=whoSigned";
    $.ajax({
        url: url,
        type:"GET",
        dataType:"script",
        jsonp: "myFunc"
    });
});