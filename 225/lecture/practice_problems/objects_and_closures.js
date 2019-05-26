function makeList() {
  var items = [];
  return {
    add: function (item) {
      items.push(item);
      console.log(item + ' added!');
    },
    remove: function (item) {
      items.splice(items.indexOf(item), 1); 
      console.log(item + ' removed!');
    },
    list: function () {
      if (items.length === 0) {
        console.log('The list is empty!'); 
      } else {
        items.forEach(x => console.log(x)); 
      } 
    },
  };
}
var list = makeList();
list.add('peas');
// peas added!
list.list();
// peas
list.add('corn');
// corn added!
list.list();
// peas
// corn
list.remove('peas');
// peas removed!
list.list();
// corn
