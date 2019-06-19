$(function() {
  $(".key").val(0);

  $("form").on("submit", function(e) {
    e.preventDefault();

    var itemName = $("#name").val();
    var quantity = Number($("#quantity").val()) || 1;
    var list = $("ul");
    list.append(`<li>${quantity} ${itemName}</li>`)
    //alert(`${firstNumber} ${operation} ${secondNumber}`); 
    //alert(result);
  });
});
