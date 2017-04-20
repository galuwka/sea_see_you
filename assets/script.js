/**
 * Created by galyna on 05.12.16.
 */
//$('.carousel').carousel({
   // interval: false
//});
/*$(function() {
    $('.carousel').each(function(){
        $(this).carousel({
            interval: false
        });
    });
});​*/
$(function(){
    $('.carousel').carousel({
        interval: 5000
    });
});
$(document).ready( function() {
    $('.dropdown-toggle').dropdown();
});
jQuery(document).ready(function($) {
    $('a[href^="#"]').bind('click.smoothscroll',function (e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate( {
            'scrollTop': $target.offset().top-40
        }, 900, 'swing', function () {
            window.location.hash = target;
        } );
    } );
} );

$(document).ready(function() {
    $(".fancybox").fancybox();
});
$(document).ready(function() {
    $(".single_image").fancybox();
});

$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('New message to ' + recipient)
    modal.find('.modal-body input').val(recipient)
});
$('#send').click(function(e) {
    e.preventDefault();
    if (($('#recipient-name').val() == '') ||
        $('#phone-number').val() == '') {
       alert('Заполните все поля!');
       return;
    };
    $.ajax({
        url: "https://formspree.io/galinasale@gmail.com",
        method: "POST",
        data: {
            name: $('#recipient-name').val(),
            email: $('#phone-number').val(),
            text: $('#message-text').val()
        },
        dataType: "json"
    }).done(function() {
        $('form').html('<h4>Спасибо, Ваш заказ отправлен.</h4>')
    }).fail(function(xhr, err) {
        $('form').html(xhr.statusText);
    });
});