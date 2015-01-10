$('document').ready(function(){

// $(function(){
//     $("event1-info").addClass('hidden');
//     $("event1-info").addClass('hidden');
//     $("event1-info").addClass('hidden');
// });

/* Smooth Scrolling - JQuery Easin plugin */
$(function() {

    $('.smooth-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top-70
        }, 800, 'easeInOutExpo');
        event.preventDefault();
    });
});

/* Update Events Description section */
$(function(){
    $('.event').click(function() {
        var $id = this.id;
        $("#event1-info").addClass('hidden');
        $("#event2-info").addClass('hidden');
        $("#event3-info").addClass('hidden');
        $("#" + $id + '-info').addClass('visible').removeClass('hidden');

    });

});

});

