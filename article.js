function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top - 100},'slow');
}

setTimeout((arguments) => {
    scrollToAnchor('Leanne');
}, 800);
