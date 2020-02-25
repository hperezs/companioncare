import $ from 'jquery';

$(function () {
    var app_component = $('.app-components');

    if (window.innerWidth <= 440) {
        app_component.addClass('row justify-content-center')
    } else {
        app_component.removeClass('row justify-content-center')
    }

})