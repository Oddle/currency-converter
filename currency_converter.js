$(document).ready( function(event) {
  $('button.convert-button').click( function(event) {
    
    // getting the values of the form fields
    var singapore = $('.singapore-currency').val();
    var china = $('.china-input').val();

    // for debug purposes
    console.log(singapore);
    console.log(china);
    console.log(singapore*china);

    // Adding html into .sing-dollars div to show results
    $('.sing-dollars').html(singapore*china);
  });
});
