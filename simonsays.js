var CSS_HOVER = 'hover';

var commentBtn_el = document.querySelector('.commentBtn');
var flip_el = jQuery('.commentBtn').closest('.flip');

commentBtn_el.addEventListener('mouseover', (ev) => {
    flip_el.addClass(CSS_HOVER);
});

var back_el = jQuery('.back', flip_el);
// var flipper_el = jQuery('.flipper', flip_el);

back_el.on('mouseout', (ev) => {
    flip_el.removeClass(CSS_HOVER);
});


jQuery('.back', flip_el).on('click', (ev) => {
    ev.stopPropagation();

    var link_el = jQuery('.back .section a', flip_el);
    document.location = link_el.get(0).href;
});

