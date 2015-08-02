$(document).ready(function() {
  console.log("hello world");

// var secretBox = $('#secretBox');
// var row1 = $('#row1');
// var row4 = $('#row4');

//Find the secretBox on the page. Set the background color to white. Add an h1 tag that says, "secret box!"
//secretBox.css('background-color', 'white');
//secretBox.append("<h1>Secret Box!</h1>");

//Find all child divs of the first row. Set the class for each div to boxType3.
//row1.children().addClass('boxType3');

//Make the last box in the last row disappear. (Hint, look into the dispaly style. Also, you should only get back one element from your selector.).
//row4.children().last().hide();

//Change all red boxes to white.
//$(".boxType1").css('background-color', 'white');

//Get the first two divs in the second row. Take away all styling from the divs.
//$('#row2 :lt(2)').css("visibility", "hidden");

//Get all divs inside the container that are not row divs and are not the secret box div. Set the width of the divs to 2 pixels.
//$('.box').not('#secretBox').css('width', '2px');


//Add an on click handler to the container div. Console log the x and y position of the click.
// $('#container').on('click', function(event) {
//   console.log("X coordinate:" + event.pageX, "Y coordinate:" + event.pageY);
// });

//Add links inside all red box divs that take the user to galvanize. Then add an on click handler that alerts the user that you can never leave the page. Make sure the user won't leave the page after the alert!
// $('.boxType1').wrap('<a href="http://www.galvanize.com"></a>').on('click', function() {
//     alert("You can never leave this page");
// });


//For all box divs, add a click handler that adds an image of a cute puppy to the box. If the image is clicked again, remove the cute puppy.



//Write a click handler on the conatainer div. The click handler should turn the container background to black and the background of the original div that was clicked to white. If the user original div that was clicked happened to be the container div, change the background of the container div to lime green. You should not use any selectors for this exercise. You can do it completely with what is given to you in the event callback.

// $('.box').on('click', function() {
//   $(this).css('background-color', 'white');
//   $('#container').css('background-color', 'black');

// });


});
