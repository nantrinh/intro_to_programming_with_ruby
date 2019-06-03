// todoManager: returns a set of todos from a todoList
// todoList: an object that has a collection of todo objects
//   - returns a copy of the collection anytime a method  returns all or a subset of it
//   - does not allow users to manipulate todo object values directly
//   - provides an interface for manipulating the collection of objects (add, update, delete, etc)
// todo: an object with the following properties and shared methods
//   Properties:
//   * id (must be unique)
//   * title
//   * completed
//   * month
//   * year
//   * description
//   
//   Shared Methods:
//   * isWithinMonthYear(month, year)

var todoData1 = {
  title: 'Buy Milk',
  month: '1',
  year: '2017',
  description: 'Milk for baby',
};

var todoData2 = {
  title: 'Buy Apples',
  month: '',
  year: '2017',
  description: 'An apple a day keeps the doctor away',
};

var todoData3 = {
  title: 'Buy chocolate',
  month: '1',
  year: '',
  description: 'For the cheat day',
};

var todoData4 = {
  title: 'Buy Veggies',
  month: '',
  year: '',
  description: 'For the daily fiber needs',
};

var todoSet = [todoData1, todoData2, todoData3, todoData4];

var todoList = {
  var list = [];
  
  add: function() {
  
  }
}

var todoManager = {

}

todoList.init(n, todoSet);
