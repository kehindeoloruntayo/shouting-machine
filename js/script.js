$(document).ready(function () {
  $(".container").submit(function (event) {
    let inputText = $("input#inputtext").val().toUpperCase();
    alert(inputText);
    event.preventDefault();
  });

  // function shout(text) {
  //     return text.toUpperCase();
  // }

  // const text = (prompt("Enter any word"));
  // const result = shout(text);
  // alert(result);

});