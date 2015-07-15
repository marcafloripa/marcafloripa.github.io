$(document).ready(function () {
    $('#show-form').on('click', function() {
        $('#form').fadeIn();
        $('.logos-img').fadeOut();
    });
    $('#close-form').on('click', function() {
    	$('#form').fadeOut();
        $('.logos-img').fadeIn();
    });
});
