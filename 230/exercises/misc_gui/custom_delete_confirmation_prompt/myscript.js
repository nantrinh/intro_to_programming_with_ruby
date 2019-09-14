itemData = [
  { id: 1, description: 'Drive' },
  { id: 2, description: 'Get job as software developer' },
  { id: 3, description: 'Plan trip to Hawaii' },
  { id: 4, description: 'Get real estate agent license'},
  { id: 5, description: 'Learn modern consumer law'}
];

$(function () {
  var todoItem = Handlebars.compile($('#todo_item').html());
  var todoList = Handlebars.compile($('#todo_list').html());
  Handlebars.registerPartial('todo_item', $('#todo_item').html());
  $('body').append(todoList({items: itemData}));

  var id;

  $('span.remove').click(function() {
    $('.confirm_prompt').show(); 
    $('.overlay').show();
    id = $(this).parent().attr('id')
  });

  $('.confirm_yes').click(function(e) {
    e.preventDefault(); 
    $('.confirm_prompt').hide();
    $('.overlay').hide();
    $(`#${id}`).remove();
  });
   
  $('.confirm_no').click(function(e) {
    e.preventDefault(); 
    $('.confirm_prompt').hide();
    $('.overlay').hide();
  });
});
