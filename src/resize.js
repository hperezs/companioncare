import $ from 'jquery';

$(function () {    
    if (window.innerWidth <= 420) {
        $('.apts-section').addClass('row justify-content-center')
        $('.app-components').addClass('row justify-content-center')
        $('#appointments .card-header').addClass('text-center')
    }
})