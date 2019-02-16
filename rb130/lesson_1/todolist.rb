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
  
  def each
    todos.each {|x| yield x}
    self
  end

  def select
    new_tdl = TodoList.new(title)
    each {|x| new_tdl << x if yield x}
    new_tdl
  end

  def find_by_title(str)
    each {|x| return x if x.title == str}
  end
  
  def all_done
    select {|x| x.done?}
  end

  def all_not_done
    select {|x| !x.done?}
  end

  def mark_done(str)
    find_by_title(str).done!
  end
  
  def mark_all_done
    each {|x| x.done!}
  end

  def mark_all_undone
    each {|x| x.undone!}
  end
end

todo1 = Todo.new("Buy milk")
todo2 = Todo.new("Clean room")
todo3 = Todo.new("Go to gym")
list = TodoList.new("Today's Todos")
list.add(todo1)
list.add(todo2)
list << todo3
list.mark_done("Clean room")
puts list
puts "\nDone\n"
puts list.all_done
puts "\nNot done\n"
puts list.all_not_done

