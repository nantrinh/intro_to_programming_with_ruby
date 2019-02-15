# This class represents a todo item and its associated
# data: name and description. There's also a "done"
# flag to show whether this todo item is done.

class Todo
  DONE_MARKER = 'X'
  UNDONE_MARKER = ' '

  attr_accessor :title, :description, :done

  def initialize(title, description='')
    @title = title
    @description = description
    @done = false
  end

  def done!
    self.done = true
  end

  def done?
    done
  end

  def undone!
    self.done = false
  end

  def to_s
    "[#{done? ? DONE_MARKER : UNDONE_MARKER}] #{title}"
  end
end

# This class represents a collection of Todo objects.
# You can perform typical collection-oriented actions
# on a TodoList object, including iteration and selection.

class TodoList
  attr_accessor :title
  attr_reader :todos

  def initialize(title)
    @title = title
    @todos = []
  end

  def add(item)
    raise TypeError, "Can only add Todo objects" unless item.class == Todo
    todos << item
  end

  alias << add
  alias to_a todos

  def size
    todos.size
  end

  def first
    todos.first
  end

  def last
    todos.last
  end

  def done?
    todos.all? { |x| x.done? }
  end

  def shift
    todos.shift
  end

  def pop
    todos.pop
  end

  def item_at(idx)
    todos.fetch(idx)
  end

  def remove_at(idx)
    todos.delete(item_at(idx))
  end

  def mark_done_at(idx)
    item_at(idx).done!
  end

  def mark_undone_at(idx)
    item_at(idx).undone!
  end

  def done!
    todos.each {|x| x.done!}
  end

  def to_s
    str = "---- #{title} ----\n"
    str << todos.map(&:to_s).join("\n")
    str
  end
end

todo1 = Todo.new("Buy milk")
todo2 = Todo.new("Clean room")
todo3 = Todo.new("Go to gym")
list = TodoList.new("Today's Todos")
list.add(todo1)
list.add(todo2)
list << todo3
#list.add(1)
p list.size == 3
p list.first == todo1
p list.last == todo3
p list.to_a == [todo1, todo2, todo3]
p list.done? == false
#list.item_at
p list.item_at(1) == todo2
# p list.item_at(100)
# list.mark_done_at
list.mark_done_at(1)
p list.item_at(1).done? == true
# list.mark_done_at(100)
list.mark_undone_at(1)
p list.item_at(1).done? == false 
list.done!
puts "all items done?"
list.to_a.each {|x| p x.done? }
puts list
list.mark_undone_at(0)
list.mark_undone_at(2)
puts list
