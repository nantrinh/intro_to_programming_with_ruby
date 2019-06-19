$(function() {
  $(".key").val(0);

  $("form").on("submit", function(e) {
    e.preventDefault();

    var firstNumber = Number($(".key").first().val());
    var secondNumber = Number($(".key").last().val());
    var operation = $("#operation").val();
  
    if (operation === "+") {
      result = firstNumber + secondNumber; 
    } else if (operation === "-") {
      result = firstNumber - secondNumber; 
    } else if (operation === "*") {
      result = firstNumber * secondNumber; 
    } else if (operation === "/") {
      result = firstNumber / secondNumber; 
    }
    //alert(`${firstNumber} ${operation} ${secondNumber}`); 
    //alert(result);
    $("#result").text(result.toString());
  });
});
