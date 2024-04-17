$('p').click(function(){
    $(this).slideToggle('slow');
});
$('p').mouseenter(function(){
    $('p').css("color", "red");

});
$('p').mouseleave(function(){
    $('p').css("color", "black");
});
$('button').mouseenter(function(){
    $(this).removeClass('makeRed').addClass('makeBlue';)
});
$('button').mouseleave(function(){
    $('this').removeClass('makeBlue').addClass('makeRed');
});
