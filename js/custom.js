$(document).ready(function () {
    $('#show-form').on('click', function() {
        $('#form').fadeIn();
        $('#close-form').fadeIn();
    });
    $('#close-form').on('click', function() {
    	$('#form').fadeOut();
        $('#close-form').fadeOut();
    });
});
